'use client';

import { useMediaQuery } from '@uidotdev/usehooks';
import type { VariantProps } from 'cva';
import { ChevronLeft, CircleCheckBig } from 'lucide-react';
import {
  useCallback,
  useMemo,
  useRef,
  useState,
  type FC,
  type ReactNode,
} from 'react';
import type { AspectRatio, CropperRef, Size } from 'react-advanced-cropper';
import { useDropzone, type DropzoneOptions } from 'react-dropzone-esm';
import { cn } from '../../helpers/utils';
import { Button } from '../Button';
import { Cropper } from '../Cropper';
import { Dialog, DialogContent, DialogTitle } from '../Dialog';
import { Spinner } from '../Spinner';
import { exportImage } from './utils';
import { borderVariants } from './variants';

export type InputFileProps = VariantProps<typeof borderVariants> &
  Omit<DropzoneOptions, 'maxFiles' | 'minFiles'> &
  Pick<React.HTMLProps<HTMLElement>, 'id' | 'ref' | 'className'> & {
    onFileSelect?: (file?: File) => void;
    placeholder?: ReactNode;
  };

export type ImageSpec =
  | {
      aspectRatio: AspectRatio;
      maxWidth: number;
      maxHeight?: number;
      minWidth?: number;
      minHeight?: number;
    }
  | {
      aspectRatio: AspectRatio;
      maxWidth?: number;
      maxHeight: number;
      minWidth?: number;
      minHeight?: number;
    }
  | Size;

export type InputImageProps = VariantProps<typeof borderVariants> &
  Omit<DropzoneOptions, 'maxFiles' | 'minFiles' | 'placeholder'> &
  Pick<React.HTMLProps<HTMLElement>, 'id' | 'ref' | 'className'> & {
    cropTitle?: ReactNode;
    discardImageTitle?: ReactNode;
    imageSpec: ImageSpec;
    onImageSelect?: (blob?: Blob) => void;
    outputMimeType?: string;
    placeholder?: ReactNode;
    useImageTitle?: ReactNode;
  };

export const InputFile: FC<InputFileProps> = ({
  id,
  ref,
  className,
  onFileSelect,
  placeholder,
  shape,
  ...props
}) => {
  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      ...props,
      onDropAccepted: (files, e) => {
        onFileSelect?.(files.length ? files[0] : undefined);
        props.onDropAccepted?.(files, e);
      },
      maxFiles: 1,
    });

  return (
    <label
      {...getRootProps({
        className: cn(
          borderVariants({ shape }),
          isDragAccept && 'border-success bg-success/10',
          isDragReject && 'border-error bg-error/10 cursor-not-allowed',
          className,
        ),
      })}
    >
      <input id={id} type="file" {...getInputProps()} />
      {placeholder}
    </label>
  );
};

export const InputImage: FC<InputImageProps> = ({
  id,
  ref,
  className,
  cropTitle = 'Crop image',
  disabled,
  discardImageTitle = 'Discard',
  imageSpec,
  onImageSelect,
  outputMimeType,
  placeholder,
  useImageTitle = 'Use image',
  shape,
}) => {
  const [file, setFile] = useState<File | undefined>();
  const [showCropper, setShowCropper] = useState(false);
  const [rendering, setRendering] = useState(false);
  const narrow = useMediaQuery('@container (min-width: 42rem /* 672px */)');
  const cropperRef = useRef<CropperRef>(null);

  const aspectRatio = useMemo(
    () =>
      'aspectRatio' in imageSpec
        ? imageSpec.aspectRatio
        : {
            minimum: imageSpec.width / imageSpec.height,
            maximum: imageSpec.width / imageSpec.height,
          },
    [imageSpec],
  );

  const handleUseImage = useCallback(() => {
    const canvas = cropperRef.current?.getCanvas();
    if (!canvas) return;

    setRendering(true);

    const exportSize = finalSize(
      { width: canvas.width, height: canvas.height },
      imageSpec,
    );

    exportImage(canvas, exportSize, outputMimeType)
      .then((blob) => {
        onImageSelect?.(blob);
        setFile(undefined);
        setShowCropper(false);
        // const file = new File([blob], 'image.png', { type: blob.type });
        // setFile(file);
        // setShowCropper(!!file);
      })
      .finally(() => {
        setRendering(false);
      });
  }, [imageSpec, outputMimeType, onImageSelect]);

  const cropper = useMemo(
    () =>
      file && (
        <Cropper
          ref={cropperRef}
          src={URL.createObjectURL(file)}
          aspectRatio={aspectRatio ?? { minimum: 1, maximum: 1 }}
          className="!max-h-[calc(100vh-180px)]"
        />
      ),
    [file, aspectRatio],
  );

  return (
    <>
      <InputFile
        id={id}
        ref={ref}
        accept={{
          'image/gif': ['.gif'],
          'image/png': ['.png'],
          'image/jpeg': ['.jpg', '.jpeg'],
          'image/webp': ['.webp'],
        }}
        className={className}
        disabled={disabled}
        onFileSelect={(selectedFile) => {
          setFile(selectedFile);
          setShowCropper(!!selectedFile);
        }}
        placeholder={placeholder}
        shape={shape}
      />
      <Dialog
        open={showCropper && !disabled}
        onOpenChange={(open) => {
          setShowCropper(open);
          if (!open) {
            setFile(undefined);
          }
        }}
      >
        <DialogContent aria-describedby={undefined}>
          <DialogTitle>{cropTitle}</DialogTitle>
          {cropper}
          <div className="flex gap-3 justify-end @container">
            <Button
              variant="outline"
              isIconOnly={narrow}
              before={<ChevronLeft />}
              disabled={rendering}
              onClick={() => {
                setShowCropper(false);
              }}
            >
              <span className="sr-only @xs:not-sr-only">
                {discardImageTitle}
              </span>
            </Button>
            <Button
              color="primary"
              before={
                !rendering ? <CircleCheckBig /> : <Spinner color="foreground" />
              }
              disabled={rendering}
              onClick={() => handleUseImage()}
            >
              {useImageTitle}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const computeScale = (originalSize: Size, imageSpec: ImageSpec): number => {
  const aspectRatio = originalSize.width / originalSize.height;

  if ('aspectRatio' in imageSpec) {
    const maxWidth = imageSpec.maxWidth ?? Number.POSITIVE_INFINITY;
    const maxHeight = imageSpec.maxHeight ?? Number.POSITIVE_INFINITY;
    const minWidth = imageSpec.minWidth ?? 1;
    const minHeight = imageSpec.minHeight ?? 1;

    if (originalSize.width > maxWidth || originalSize.height > maxHeight) {
      // scale original size to fit the new size
      return Math.min(
        maxWidth / originalSize.width,
        maxHeight / originalSize.height,
      );
    }

    if (originalSize.width < minWidth || originalSize.height < minHeight) {
      // scale original size to fit the new size
      return Math.max(
        minWidth / originalSize.width,
        minHeight / originalSize.height,
      );
    }

    return 1;
  }

  const width = imageSpec.width;
  const height = imageSpec.height;

  // scale original size to fit the new size
  return Math.min(width / originalSize.width, height / originalSize.height);
};

const finalSize = (originalSize: Size, imageSpec: ImageSpec): Size => {
  const scale = computeScale(originalSize, imageSpec);
  if (scale === 1) return originalSize;

  const scaledWidth = originalSize.width * scale;
  const scaledHeight = originalSize.height * scale;
  return { width: scaledWidth, height: scaledHeight };
};
