'use client';

import { useIsClient } from '@geee-be/react-utils';
import type { ReactElement, ReactNode } from 'react';
import { useId } from 'react';
import type { CropperProps } from 'react-advanced-cropper';
import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
  type Message,
  type ValidationRule,
} from 'react-hook-form';
import { FormControl } from '../FormControl/FormControl.js';
import type { LabelProps } from '../Label/index.js';
import { Skeleton } from '../Skeleton/Skeleton.js';
import type { LabelHelperProps } from '../types.js';
import type { InputImageProps } from './InputImage.js';
import { InputImage } from './InputImage.js';
import type { ImageSpec, ValueType } from './types.js';
import { fromValue, toValue } from './utils.js';

export type FormInputImageProps<
  T extends FieldValues,
  Field extends FieldPath<T>,
> = Omit<InputImageProps & LabelProps & LabelHelperProps, 'required'> & {
  destructive?: boolean;
  control?: Control<T>;
  name: Field;
  label: ReactNode;
  valueType?: ValueType;
  wrapperClassName?: string;

  cropperProps?: Pick<CropperProps, 'stencilComponent' | 'stencilProps'>;
  cropTitle?: ReactNode;
  discardImageTitle?: ReactNode;
  imageSpec: ImageSpec;
  outputContentType?: string;
  useImageTitle?: ReactNode;

  // validation
  required?: Message | ValidationRule<boolean>;
};

/* -------------------------------- Component ------------------------------- */
export const FormInputImage = <
  T extends FieldValues,
  Field extends FieldPath<T>,
>({
  className,
  control,
  description,
  destructive,
  disabled,
  helperText,
  id,
  label,
  name,
  tooltip,
  required,
  valueType = 'blob',
  wrapperClassName,

  cropperProps,
  cropTitle,
  discardImageTitle,
  imageAlt,
  imageSpec,
  outputContentType,
  placeholder,
  useImageTitle,

  ...otherProps
}: FormInputImageProps<T, Field>): ReactElement => {
  const generatedId = useId();
  const elId = id ?? generatedId;
  const ariaInvalid = otherProps['aria-invalid'] ?? destructive;
  const isClient = useIsClient();

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required,
      }}
      disabled={disabled}
      render={({ field, fieldState: { error }, formState }) => (
        <FormControl
          id={elId}
          aria-invalid={otherProps['aria-invalid']}
          className={wrapperClassName}
          description={description}
          destructive={!!error}
          disabled={
            disabled ||
            field.disabled ||
            formState.isLoading ||
            formState.isValidating ||
            formState.isSubmitting ||
            formState.disabled
          }
          error={error}
          helperText={helperText}
          label={label}
          required={required}
          tooltip={tooltip}
        >
          {isClient ? (
            <InputImage
              id={elId}
              ref={field.ref}
              aria-describedby={helperText ? `${elId}__describer` : undefined}
              aria-invalid={ariaInvalid}
              aria-labelledby={label ? `${elId}__label` : undefined}
              // destructive={!!error}
              className={className}
              cropperProps={cropperProps}
              cropTitle={cropTitle}
              discardImageTitle={discardImageTitle}
              imageAlt={imageAlt}
              imageSpec={imageSpec}
              outputContentType={outputContentType}
              placeholder={placeholder}
              useImageTitle={useImageTitle}
              disabled={
                disabled ||
                field.disabled ||
                formState.isLoading ||
                formState.isSubmitting ||
                formState.disabled
              }
              onBlur={field.onBlur}
              onChange={(value) => {
                Promise.resolve()
                  .then(async () =>
                    field.onChange({
                      target: {
                        name,
                        value: await toValue(value as Blob, valueType),
                      },
                    }),
                  )
                  .catch(console.error);
              }}
              value={fromValue(field.value)}
              {...otherProps}
            />
          ) : (
            <Skeleton className={className} />
          )}
        </FormControl>
      )}
    />
  );
};

FormInputImage.displayName = 'FormInputImage';
