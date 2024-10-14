'use client';

import type { ReactElement, ReactNode } from 'react';
import { useId } from 'react';
import type {
  Control,
  FieldPath,
  FieldValues,
  Message,
  ValidationRule,
} from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { FormControl } from '../FormControl/FormControl.js';
import type { LabelProps } from '../Label/index.js';
import type { LabelHelperProps } from '../types.js';
import type { ComboboxElement, ComboboxProps } from './Combobox.js';
import { Combobox } from './Combobox.js';

/* ---------------------------------- Types --------------------------------- */
export type FormComboboxElement = ComboboxElement;

export type FormComboboxProps<
  T extends FieldValues,
  Field extends FieldPath<T>,
> = Omit<
  ComboboxProps & LabelProps & LabelHelperProps,
  'required' | 'min' | 'max' | 'maxLength' | 'minLength' | 'pattern'
> & {
  destructive?: boolean;
  control?: Control<T>;
  name: Field;
  label: ReactNode;
  placeholder?: ReactNode;
  // validation
  required?: Message | ValidationRule<boolean>;
};

/* -------------------------------- Component ------------------------------- */
export const FormCombobox = <
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
  required,
  tooltip,
  ...otherProps
}: FormComboboxProps<T, Field>): ReactElement => {
  const generatedId = useId();
  const elId = id ?? generatedId;
  const ariaInvalid = otherProps['aria-invalid'] ?? destructive;

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required }}
      disabled={disabled}
      render={({ field, fieldState: { error }, formState }) => (
        <FormControl
          id={elId}
          aria-invalid={otherProps['aria-invalid']}
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
          <Combobox
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
            onBlur={field.onBlur}
            onValueChange={(value) => {
              field.onChange({ target: { name, value } });
            }}
            value={field.value as string}
            {...otherProps}
          />
        </FormControl>
      )}
    />
  );
};

FormCombobox.displayName = 'FormCombobox';
