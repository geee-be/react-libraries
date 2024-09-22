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
import type { YearOfBirthPickerProps } from './YearOfBirthPicker.js';
import { YearOfBirthPicker } from './YearOfBirthPicker.js';

/* ---------------------------------- Types --------------------------------- */
export type FormYearOfBirthPickerProps<
  T extends FieldValues,
  Field extends FieldPath<T>,
> = Omit<
  YearOfBirthPickerProps & LabelProps & LabelHelperProps,
  'required' | 'min' | 'max' | 'maxLength' | 'minLength' | 'pattern'
> & {
  destructive?: boolean;
  control?: Control<T>;
  name: Field;
  label: ReactNode;
  placeholder?: ReactNode;
  // validation
  max?: ValidationRule<number | string>;
  min?: ValidationRule<number | string>;
  required?: Message | ValidationRule<boolean>;
};

/* -------------------------------- Component ------------------------------- */
export const FormYearOfBirthPicker = <
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
  max,
  min,
  required,
  ...otherProps
}: FormYearOfBirthPickerProps<T, Field>): ReactElement => {
  const generatedId = useId();
  const elId = id ?? generatedId;
  const ariaInvalid = otherProps['aria-invalid'] ?? destructive;

  // TODO min/max validation range

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        max,
        min,
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
            <YearOfBirthPicker
              id={elId}
              ref={field.ref}
              aria-describedby={helperText ? `${elId}__describer` : undefined}
              aria-invalid={ariaInvalid}
              aria-labelledby={label ? `${elId}__label` : undefined}
              destructive={!!error}
              disabled={
                disabled ||
                field.disabled ||
                formState.isLoading ||
                formState.isSubmitting ||
                formState.disabled
              }
              name={name}
              {...otherProps}
              {...(field as any)}
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

FormYearOfBirthPicker.displayName = 'FormYearOfBirthPicker';
