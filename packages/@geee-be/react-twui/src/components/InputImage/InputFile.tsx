'use client';

import type { VariantProps } from 'cva';
import { forwardRef, type PropsWithChildren } from 'react';
import { useDropzone, type DropzoneOptions } from 'react-dropzone-esm';
import { cn } from '../../helpers/utils';
import { borderVariants } from './variants';

export type InputFileProps = VariantProps<typeof borderVariants> &
  Omit<DropzoneOptions, 'maxFiles' | 'minFiles'> &
  Pick<React.HTMLProps<HTMLElement>, 'id' | 'className'> & {
    onChange?: (file?: File) => void;
  };

export const InputFile = forwardRef<
  HTMLInputElement,
  PropsWithChildren<InputFileProps>
>(
  (
    { id, children, className, onChange: onFileSelect, shape, ...props },
    ref,
  ) => {
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
        <input
          id={id}
          ref={ref}
          type="file"
          multiple={false}
          {...getInputProps()}
        />
        {children}
      </label>
    );
  },
);
