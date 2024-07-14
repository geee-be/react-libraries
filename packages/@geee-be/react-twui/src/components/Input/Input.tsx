import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { cn } from '../../helpers/utils.js';
import { inputVariants } from './variants.js';

/* ---------------------------------- Types --------------------------------- */
export type InputElement = HTMLInputElement;
export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  destructive?: boolean;
};

/* -------------------------------- Component ------------------------------- */
export const Input = forwardRef<InputElement, InputProps>(
  ({ className, destructive, disabled, readOnly, ...otherProps }, ref) => {
    const ariaInvalid = otherProps['aria-invalid'] ?? destructive;

    return (
      <input
        ref={ref}
        aria-invalid={ariaInvalid}
        className={cn(
          inputVariants({ ariaInvalid: !!ariaInvalid, disabled }),
          className,
        )}
        disabled={disabled || readOnly}
        readOnly={readOnly}
        {...otherProps}
      />
    );
  },
);

Input.displayName = 'Input';
