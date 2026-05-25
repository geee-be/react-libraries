'use client';

import type { ComponentProps, ReactElement, ReactNode } from 'react';
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
import {
  TextArea,
  type TextAreaElement,
  type TextAreaProps,
} from './TextArea.js';

/* ---------------------------------- Types --------------------------------- */
export type FormTextAreaElement = TextAreaElement;
export type FormTextAreaProps<
  T extends FieldValues,
  Field extends FieldPath<T>,
> = Omit<
  TextAreaProps & LabelProps & LabelHelperProps,
  'required' | 'maxLength' | 'minLength'
> & {
  destructive?: boolean;
  control?: Control<T>;
  name: Field;
  label: ReactNode;
  placeholder?: ReactNode;
  FormControlProps?: {
    className?: string;
  };
  TextAreaProps?: ComponentProps<typeof TextArea>['TextAreaProps'];
  // validation
  maxLength?: ValidationRule<number>;
  minLength?: ValidationRule<number>;
  required?: Message | ValidationRule<boolean>;
};

/* -------------------------------- Component ------------------------------- */
export const FormTextArea = <
  T extends FieldValues,
  Field extends FieldPath<T>,
>({
  control,
  description,
  destructive,
  disabled,
  helperText,
  id,
  label,
  name,
  tooltip,
  maxLength,
  minLength,
  required,
  FormControlProps,
  TextAreaProps,
  ...otherProps
}: FormTextAreaProps<T, Field>): ReactElement => {
  const generatedId = useId();
  const elId = id ?? generatedId;
  const ariaInvalid = otherProps['aria-invalid'] ?? destructive;

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        maxLength,
        minLength,
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
          <TextArea
            id={elId}
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
            TextAreaProps={TextAreaProps}
            {...otherProps}
            {...field}
            name={field.name ?? name}
          />
        </FormControl>
      )}
    />
  );
};

FormTextArea.displayName = 'FormTextArea';
