'use client';

import { useIsClient } from '@geee-be/react-utils';
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
import { FormControl } from '../FormControl/FormControl';
import type { LabelProps } from '../Label/Label';
import { Skeleton } from '../Skeleton/Skeleton';
import type { LabelHelperProps } from '../types';
import { InputFile, type InputFileProps } from './InputFile';
import type { ImageBinary } from './types';

export type FormInputFileProps<
  T extends FieldValues,
  Field extends FieldPath<T>,
> = Omit<InputFileProps & LabelProps & LabelHelperProps, 'required'> & {
  destructive?: boolean;
  control?: Control<T>;
  name: Field;
  label: ReactNode;
  wrapperClassName?: string;
  placeholder?: ReactNode;
  toValue: (value: Blob) => Promise<T[Field] | undefined>;

  // validation
  required?: Message | ValidationRule<boolean>;
};

export const fromValue = (value: ImageBinary<Buffer>): Blob | undefined => {
  if (!value) return undefined;
  return new Blob([value.data], { type: value.contentType });
};

/* -------------------------------- Component ------------------------------- */
export const FormInputFile = <
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
  wrapperClassName,
  placeholder,
  toValue,

  ...otherProps
}: FormInputFileProps<T, Field>): ReactElement => {
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
            <InputFile
              id={elId}
              ref={field.ref}
              aria-describedby={helperText ? `${elId}__describer` : undefined}
              aria-invalid={ariaInvalid}
              aria-labelledby={label ? `${elId}__label` : undefined}
              // destructive={!!error}
              className={className}
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
                        value: await toValue(value as Blob),
                      },
                    }),
                  )
                  .catch(console.error);
              }}
              {...otherProps}
            >
              {placeholder}
            </InputFile>
          ) : (
            <Skeleton className={className} />
          )}
        </FormControl>
      )}
    />
  );
};

FormInputFile.displayName = 'FormInputFile';
