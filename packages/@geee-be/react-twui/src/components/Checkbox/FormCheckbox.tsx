'use client';

import type { ReactElement } from 'react';
import { useId } from 'react';
import type { Control, FieldPath, FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import type { LabelProps } from '../Label/index.js';
import type { LabelHelperProps } from '../types.js';
import type { CheckboxElement, CheckboxElementProps } from './Checkbox.js';
import { Checkbox } from './Checkbox.js';

/* ---------------------------------- Types --------------------------------- */
export type FormCheckboxElement = CheckboxElement;

export type FormCheckboxProps<
  T extends FieldValues,
  Field extends FieldPath<T>,
> = Omit<
  CheckboxElementProps & LabelProps & LabelHelperProps,
  'checked' | 'onCheckedChange' | 'error' | 'required'
> & {
  control?: Control<T>;
  name: Field;
  required?: boolean | string;
};

/* -------------------------------- Component ------------------------------- */
export const FormCheckbox = <
  T extends FieldValues,
  Field extends FieldPath<T>,
>({
  control,
  disabled,
  id,
  name,
  required,
  ...otherProps
}: FormCheckboxProps<T, Field>): ReactElement => {
  const generatedId = useId();
  const elId = id ?? generatedId;

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required }}
      disabled={disabled}
      render={({ field, fieldState: { error }, formState }) => (
        <Checkbox
          id={elId}
          ref={field.ref}
          disabled={
            disabled ||
            field.disabled ||
            formState.isLoading ||
            formState.isValidating ||
            formState.isSubmitting ||
            formState.disabled
          }
          name={name}
          onBlur={field.onBlur}
          onCheckedChange={(value) =>
            field.onChange({
              target: {
                name,
                value: value === 'indeterminate' ? undefined : value,
              },
            })
          }
          checked={field.value === undefined ? 'indeterminate' : field.value}
          error={error}
          {...otherProps}
        />
      )}
    />
  );
};

// export const FormCheckbox = forwardRef(FormCheckboxRefRender);

FormCheckbox.displayName = 'FormCheckbox';
