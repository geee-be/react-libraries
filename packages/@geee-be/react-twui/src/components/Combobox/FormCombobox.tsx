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
import { fieldError } from '../../helpers/field-error.js';
import { Label, type LabelProps } from '../Label/index.js';
import { type LabelHelperProps } from '../types.js';
import type {
  ComboboxElement,
  ComboboxGroupProps,
  ComboboxProps,
} from './Combobox.js';
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
  hint?: ReactNode;
  name: Field;
  items: ComboboxGroupProps[];
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
      render={({ field, fieldState: { error } }) => (
        <div className="flex flex-col gap-1 antialiased">
          <Label
            description={description}
            disabled={disabled}
            htmlFor={elId}
            id={`${elId}__label`}
            required={!!required}
            tooltip={tooltip}
          >
            {label}
          </Label>

          <div className="relative flex items-center">
            <Combobox
              id={elId}
              ref={field.ref}
              aria-describedby={helperText ? `${elId}__describer` : undefined}
              aria-invalid={ariaInvalid}
              aria-labelledby={label ? `${elId}__label` : undefined}
              destructive={!!error}
              disabled={disabled || field.disabled}
              name={name}
              onBlur={field.onBlur}
              onValueChange={(value) => {
                console.log('value', value);
                field.onChange({ target: { name, value } });
              }}
              value={field.value as string}
              {...otherProps}
            />
          </div>

          <Label.Helper
            aria-invalid={ariaInvalid}
            disabled={disabled}
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

FormCombobox.displayName = 'FormCombobox';
