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
import type { CropperProps, CropperRef } from 'react-advanced-cropper';
import type { DropzoneOptions } from 'react-dropzone-esm';
import { cn } from '../../helpers/utils';
import { Button } from '../Button';
import { Cropper } from '../Cropper';
import { Dialog, DialogContent, DialogTitle } from '../Dialog';
import { Spinner } from '../Spinner';
import { InputFile } from './InputFile';
import type { ImageSpec } from './types';
import { exportImage, finalSize } from './utils';
import type { borderVariants } from './variants';

export type InputImageProps = VariantProps<typeof borderVariants> &
  Omit<DropzoneOptions, 'maxFiles' | 'minFiles' | 'placeholder'> &
  Pick<
    React.HTMLProps<HTMLElement>,
    'id' | 'ref' | 'className' | 'onChange'
  > & {
    cropperProps?: Pick<CropperProps, 'stencilComponent' | 'stencilProps'>;
    cropTitle?: ReactNode;
    discardImageTitle?: ReactNode;
    imageSpec: ImageSpec;
    onChange?: (blob?: Blob) => void;
    outputMimeType?: string;
    placeholder?: ReactNode;
    useImageTitle?: ReactNode;
    value?: Blob;
  };

export const InputImage: FC<InputImageProps> = ({
  id,
  ref,
  className,
  accept,
  cropperProps,
  cropTitle = 'Crop image',
  disabled,
  discardImageTitle = 'Discard',
  imageSpec,
  onChange,
  outputMimeType,
  placeholder,
  useImageTitle = 'Use image',
  shape,
  value,
}) => {
  const [file, setFile] = useState<File | undefined>();
  const [showCropper, setShowCropper] = useState(false);
  const [rendering, setRendering] = useState(false);
  const [uncontrolledValue, setUncontrolledValue] = useState<Blob>();
  const narrow = useMediaQuery('@container (min-width: 42rem /* 672px */)');
  const cropperRef = useRef<CropperRef>(null);

  const displayValue = value ?? uncontrolledValue;

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
        onChange?.(blob);
        setUncontrolledValue(blob);
        setFile(undefined);
        setShowCropper(false);
      })
      .finally(() => {
        setRendering(false);
      });
  }, [imageSpec, outputMimeType, onChange]);

  const cropper = useMemo(
    () =>
      file && (
        <Cropper
          ref={cropperRef}
          src={URL.createObjectURL(file)}
          aspectRatio={aspectRatio ?? { minimum: 1, maximum: 1 }}
          className="!max-h-[calc(100vh-180px)]"
          {...cropperProps}
        />
      ),
    [file, aspectRatio, cropperProps],
  );

  return (
    <>
      <InputFile
        id={id}
        ref={ref}
        accept={
          accept ?? {
            'image/gif': ['.gif'],
            'image/png': ['.png'],
            'image/jpeg': ['.jpg', '.jpeg'],
            'image/svg+xml': ['.svg'],
            'image/webp': ['.webp'],
          }
        }
        className={cn(displayValue && 'border-solid p-0', className)}
        disabled={disabled}
        onChange={(selectedFile) => {
          setFile(selectedFile);
          setShowCropper(!!selectedFile);
        }}
        shape={shape}
      >
        {displayValue ? (
          <img src={URL.createObjectURL(displayValue)} alt="selected content" />
        ) : (
          placeholder
        )}
      </InputFile>
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