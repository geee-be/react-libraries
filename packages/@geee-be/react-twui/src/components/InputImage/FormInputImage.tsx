'use client';

import type { ReactElement, ReactNode } from 'react';
import { useId } from 'react';
import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
  type Message,
  type ValidationRule,
} from 'react-hook-form';
import { fieldError } from '../../helpers/field-error.js';
import { Label, type LabelProps } from '../Label/index.js';
import type { LabelHelperProps } from '../types.js';
import type { ImageSpec, InputImageProps } from './InputImage.js';
import { InputImage } from './InputImage.js';

export type FormInputProps<
  T extends FieldValues,
  Field extends FieldPath<T>,
> = Omit<InputImageProps & LabelProps & LabelHelperProps, 'required'> & {
  destructive?: boolean;
  control?: Control<T>;
  name: Field;
  label: ReactNode;

  cropTitle?: ReactNode;
  discardImageTitle?: ReactNode;
  imageSpec: ImageSpec;
  outputMimeType?: string;
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

  cropTitle,
  discardImageTitle,
  imageSpec,
  outputMimeType,
  placeholder,
  useImageTitle,

  ...otherProps
}: FormInputProps<T, Field>): ReactElement => {
  const generatedId = useId();
  const elId = id ?? generatedId;
  const ariaInvalid = otherProps['aria-invalid'] ?? destructive;

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required,
      }}
      disabled={disabled}
      render={({ field, fieldState: { error }, formState }) => (
        <div className="flex flex-col gap-1 antialiased">
          <Label
            description={description}
            htmlFor={elId}
            id={`${elId}__label`}
            required={!!required}
            tooltip={tooltip}
          >
            {label}
          </Label>

          <div className="relative flex items-center">
            <InputImage
              id={elId}
              ref={field.ref}
              aria-describedby={helperText ? `${elId}__describer` : undefined}
              aria-invalid={ariaInvalid}
              aria-labelledby={label ? `${elId}__label` : undefined}
              // destructive={!!error}
              className={className}
              cropTitle={cropTitle}
              discardImageTitle={discardImageTitle}
              imageSpec={imageSpec}
              outputMimeType={outputMimeType}
              placeholder={placeholder}
              useImageTitle={useImageTitle}
              disabled={
                disabled ||
                field.disabled ||
                formState.isLoading ||
                formState.isSubmitting ||
                formState.disabled
              }
              // name={name}
              onBlur={field.onBlur}
              onImageSelect={(value) => {
                // console.log('image', value);
                field.onChange({ target: { name, value } });
              }}
              // value={field.value as string}
              {...otherProps}
              // {...(field as any)}
            />
          </div>

          <Label.Helper
            aria-invalid={ariaInvalid}
            disabled={
              disabled ||
              field.disabled ||
              formState.isLoading ||
              formState.isValidating ||
              formState.isSubmitting ||
              formState.disabled
            }
            id={`${elId}__describer`}
          >
            {error && (
              <span className="text-error mr-2">{fieldError(error)}</span>
            )}
            <span className="">{helperText}</span>
          </Label.Helper>
        </div>
      )}
    />
  );
};

FormInputImage.displayName = 'FormInputImage';
