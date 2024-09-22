import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { cn } from '../../helpers/utils.js';
import { inputVariants } from './variants.js';

/* ---------------------------------- Types --------------------------------- */
export type InputElement = HTMLInputElement;
export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'autoFocus'
> & {
  autoFocus?: boolean | 'non-touch';
  destructive?: boolean;
};

function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    ('msMaxTouchPoints' in navigator &&
      typeof navigator.msMaxTouchPoints === 'number' &&
      navigator.msMaxTouchPoints > 0)
  );
}

/* -------------------------------- Component ------------------------------- */
export const Input = forwardRef<InputElement, InputProps>(
  (
    { autoFocus, className, destructive, disabled, readOnly, ...otherProps },
    ref,
  ) => {
    const ariaInvalid = otherProps['aria-invalid'] ?? destructive;

    const computedAutoFocus =
      autoFocus === 'non-touch' ? !isTouchDevice() : autoFocus ?? false;

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
        // biome-ignore lint/a11y/noAutofocus: <explanation>
        autoFocus={computedAutoFocus}
        {...otherProps}
      />
    );
  },
);

Input.displayName = 'Input';
