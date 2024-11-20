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
import { FormControl } from '../FormControl/FormControl.js';
import type { LabelProps } from '../Label/index.js';
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
  wrapperClassName?: string;
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
  wrapperClassName,
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
        </FormControl>
      )}
    />
  );
};

FormYearOfBirthPicker.displayName = 'FormYearOfBirthPicker';
