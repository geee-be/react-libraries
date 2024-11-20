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
import type { SelectElement, SelectGroupProps, SelectProps } from './Select.js';
import { Select } from './Select.js';

/* ---------------------------------- Types --------------------------------- */
export type FormSelectElement = SelectElement;

export type FormSelectProps<
  T extends FieldValues,
  Field extends FieldPath<T>,
> = Omit<
  SelectProps & LabelProps & LabelHelperProps,
  'required' | 'min' | 'max' | 'maxLength' | 'minLength' | 'pattern'
> & {
  destructive?: boolean;
  control?: Control<T>;
  name: Field;
  items: SelectGroupProps[];
  label: ReactNode;
  placeholder?: ReactNode;
  wrapperClassName?: string;
  // validation
  required?: Message | ValidationRule<boolean>;
};

/* -------------------------------- Component ------------------------------- */
export const FormSelect = <T extends FieldValues, Field extends FieldPath<T>>({
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
  wrapperClassName,
  ...otherProps
}: FormSelectProps<T, Field>): ReactElement => {
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
          <Select
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
            onValueChange={(value) =>
              field.onChange({ target: { name, value } })
            }
            value={field.value as string}
            {...otherProps}
          />
        </FormControl>
      )}
    />
  );
};

// export const FormSelect = forwardRef(FormSelectRefRender);

FormSelect.displayName = 'FormSelect';
