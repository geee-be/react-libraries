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
import type { InputOtpElement, InputOtpProps } from './InputOtp.js';
import { InputOtp } from './InputOtp.js';

/* ---------------------------------- Types --------------------------------- */
export type FormInputOtpElement = InputOtpElement;

export type FormInputOtpProps<
  T extends FieldValues,
  Field extends FieldPath<T>,
> = Omit<
  InputOtpProps & LabelProps & LabelHelperProps,
  'required' | 'maxLength'
> & {
  control?: Control<T>;
  name: Field;
  label: ReactNode;
  wrapperClassName?: string;
  // validation
  maxLength?: ValidationRule<number>;
  required?: Message | ValidationRule<boolean>;
};

/* -------------------------------- Component ------------------------------- */
export const FormInputOtp = <
  T extends FieldValues,
  Field extends FieldPath<T>,
>({
  autoFocus,
  children,
  className,
  control,
  description,
  disabled,
  helperText,
  id,
  label,
  name,
  tooltip,
  maxLength,
  required,
  wrapperClassName,
  ...otherProps
}: FormInputOtpProps<T, Field>): ReactElement => {
  const generatedId = useId();
  const elId = id ?? generatedId;
  const ariaInvalid = otherProps['aria-invalid'];

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        maxLength,
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
          <InputOtp
            id={elId}
            ref={field.ref}
            aria-describedby={helperText ? `${elId}__describer` : undefined}
            aria-invalid={ariaInvalid}
            aria-labelledby={label ? `${elId}__label` : undefined}
            // destructive={!!error}
            disabled={
              disabled ||
              field.disabled ||
              formState.isLoading ||
              formState.isSubmitting ||
              formState.disabled
            }
            name={name}
            maxLength={
              (typeof maxLength === 'number' ? maxLength : maxLength?.value) ||
              6
            }
            onChange={field.onChange}
            value={field.value}
            autoFocus={autoFocus}
          >
            {children}
          </InputOtp>
        </FormControl>
      )}
    />
  );
};

FormInputOtp.displayName = 'FormInputOtp';
