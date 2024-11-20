'use client';

import type { ComponentProps, ReactElement, ReactNode } from 'react';
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
import type { InputElement, InputProps } from './Input.js';
import { Input } from './Input.js';

/* ---------------------------------- Types --------------------------------- */
export type FormInputElement = InputElement;
// export type FormInputProps = InputProps &
//   LabelProps &
//   LabelHelperProps & {
//     destructive?: boolean;
//   };
export type FormInputProps<
  T extends FieldValues,
  Field extends FieldPath<T>,
> = Omit<
  InputProps & LabelProps & LabelHelperProps,
  'required' | 'min' | 'max' | 'maxLength' | 'minLength' | 'pattern'
> & {
  destructive?: boolean;
  control?: Control<T>;
  name: Field;
  label: ReactNode;
  placeholder?: ReactNode;
  FormControlProps?: {
    className?: string;
  };
  InputProps?: ComponentProps<typeof Input>['InputProps'];
  // validation
  max?: ValidationRule<number | string>;
  maxLength?: ValidationRule<number>;
  min?: ValidationRule<number | string>;
  minLength?: ValidationRule<number>;
  pattern?: ValidationRule<RegExp>;
  required?: Message | ValidationRule<boolean>;
};

/* -------------------------------- Component ------------------------------- */
export const FormInput = <T extends FieldValues, Field extends FieldPath<T>>({
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
  maxLength,
  min,
  minLength,
  pattern,
  required,
  FormControlProps,
  InputProps,
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
        max,
        maxLength,
        min,
        minLength,
        pattern,
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
          <Input
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
            InputProps={InputProps}
            {...otherProps}
            {...(field as any)}
          />
        </FormControl>
      )}
    />
  );
};

FormInput.displayName = 'FormInput';
