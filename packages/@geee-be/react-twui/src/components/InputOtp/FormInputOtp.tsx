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
import type { InputOtpElement, InputOtpProps } from './InputOtp.js';
import { InputOtp } from './InputOtp.js';

/* ---------------------------------- Types --------------------------------- */
export type FormInputTopElement = InputOtpElement;

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
  // validation
  maxLength?: ValidationRule<number>;
  required?: Message | ValidationRule<boolean>;
};

/* -------------------------------- Component ------------------------------- */
export const FormInputOtp = <
  T extends FieldValues,
  Field extends FieldPath<T>,
>({
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
        <div className="flex flex-col gap-1 antialiased">
          <Label
            description={description}
            disabled={
              disabled ||
              field.disabled ||
              formState.isLoading ||
              formState.isValidating ||
              formState.isSubmitting ||
              formState.disabled
            }
            htmlFor={elId}
            id={`${elId}__label`}
            required={!!required}
            tooltip={tooltip}
          >
            {label}
          </Label>

          <div className="relative flex items-center">
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
                (typeof maxLength === 'number'
                  ? maxLength
                  : maxLength?.value) || 6
              }
              onChange={field.onChange}
              value={field.value}
            >
              {children}
            </InputOtp>
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

FormInputOtp.displayName = 'FormInputOtp';
