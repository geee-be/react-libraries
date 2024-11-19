'use client';

import type { PropsWithChildren, ReactElement, ReactNode } from 'react';
import type { FieldError, Message, ValidationRule } from 'react-hook-form';
import { fieldError } from '../../helpers/field-error.js';
import { Label, type LabelProps } from '../Label/index.js';
import type { LabelHelperProps } from '../types.js';

/* ---------------------------------- Types --------------------------------- */
export type FormControlProps = Omit<
  LabelProps & LabelHelperProps,
  'required' | 'id'
> & {
  destructive?: boolean;
  error?: FieldError;
  id: string;
  label: ReactNode;
  placeholder?: ReactNode;
  required?: Message | ValidationRule<boolean>;
};

/* -------------------------------- Component ------------------------------- */
export const FormControl = ({
  children,
  description,
  destructive,
  disabled,
  error,
  helperText,
  id,
  label,
  required,
  tooltip,
  'aria-invalid': ariaInvalid,
}: PropsWithChildren<FormControlProps>): ReactElement => (
  <div className="flex flex-col gap-1 antialiased">
    <Label
      description={description}
      htmlFor={id}
      id={`${id}__label`}
      required={!!required}
      tooltip={tooltip}
    >
      {label}
    </Label>

    <div className="relative flex items-center">{children}</div>

    <Label.Helper
      aria-invalid={ariaInvalid || destructive}
      disabled={disabled}
      id={`${id}__describer`}
    >
      <span className="">{helperText}</span>
      {error && <span className="text-error mr-2"> {fieldError(error)}</span>}
    </Label.Helper>
  </div>
);

FormControl.displayName = 'FormControl';
