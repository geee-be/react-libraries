'use client';

import type { VariantProps } from 'cva';
import type { FC, PropsWithChildren } from 'react';
import { useDropzone, type DropzoneOptions } from 'react-dropzone-esm';
import { cn } from '../../helpers/utils';
import { borderVariants } from './variants';

export type InputFileProps = VariantProps<typeof borderVariants> &
  Omit<DropzoneOptions, 'maxFiles' | 'minFiles'> &
  Pick<React.HTMLProps<HTMLElement>, 'id' | 'ref' | 'className'> & {
    onChange?: (file?: File) => void;
  };

export const InputFile: FC<PropsWithChildren<InputFileProps>> = ({
  id,
  ref,
  children,
  className,
  onChange: onFileSelect,
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
      {children}
    </label>
  );
};
