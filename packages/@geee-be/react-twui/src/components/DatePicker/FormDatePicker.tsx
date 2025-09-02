'use client';

import type { ReactElement, ReactNode } from 'react';
import { useId } from 'react';
import {
  type Control,
  Controller,
  type FieldPath,
  type FieldValues,
  type Message,
  type ValidationRule,
} from 'react-hook-form';
import { FormControl } from '../FormControl/FormControl.js';
import type { LabelProps } from '../Label/index.js';
import type { LabelHelperProps } from '../types.js';
import type { DatePickerProps } from './DatePicker.js';
import { DatePicker } from './DatePicker.js';

type DateValidationRule = Date | { value: Date; message: string };

/* ---------------------------------- Types --------------------------------- */
export type FormDatePickerProps<
  T extends FieldValues,
  Field extends FieldPath<T>,
> = Omit<
  DatePickerProps & LabelProps & LabelHelperProps,
  'required' | 'value' | 'defaultDate' | 'onValueChange'
> & {
  destructive?: boolean;
  control?: Control<T>;
  name: Field;
  label: ReactNode;
  placeholder?: ReactNode;
  FormControlProps?: {
    className?: string;
  };
  // validation
  required?: Message | ValidationRule<boolean>;
  min?: DateValidationRule;
  max?: DateValidationRule;
};

/* -------------------------------- Component ------------------------------- */
export const FormDatePicker = <
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
  min,
  max,
  required,
  FormControlProps,
  ...otherProps
}: FormDatePickerProps<T, Field>): ReactElement => {
  const generatedId = useId();
  const elId = id ?? generatedId;
  const ariaInvalid = otherProps['aria-invalid'] ?? destructive;

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        // biome-ignore lint/suspicious/noExplicitAny: needed
        min: min as ValidationRule<any>,
        // biome-ignore lint/suspicious/noExplicitAny: needed
        max: max as ValidationRule<any>,
        required,
      }}
      disabled={disabled}
      render={({ field, fieldState: { error }, formState }) => (
        <FormControl
          id={elId}
          aria-invalid={otherProps['aria-invalid']}
          className={FormControlProps?.className}
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
          <DatePicker
            // id={elId}
            ref={field.ref}
            aria-describedby={helperText ? `${elId}__describer` : undefined}
            aria-invalid={ariaInvalid}
            aria-labelledby={label ? `${elId}__label` : undefined}
            className={className}
            destructive={!!error}
            disabled={
              disabled ||
              field.disabled ||
              formState.isLoading ||
              formState.isSubmitting ||
              formState.disabled
            }
            // name={name}
            onBlur={field.onBlur}
            onValueChange={(value) => {
              field.onChange({ target: { name, value } });
            }}
            value={field.value}
            {...otherProps}
          />
        </FormControl>
      )}
    />
  );
};

FormDatePicker.displayName = 'FormDatePicker';
