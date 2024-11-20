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

  /**
   * The slot to be rendered before the label.
   */
  before?: React.ReactElement<HTMLElement>;

  /**
   * The slot to be rendered after the label.
   */
  after?: React.ReactElement<HTMLElement>;

  InputProps?: {
    /**
     * The class name to be applied to the input element.
     */
    className?: string;
  };
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
    {
      after,
      autoFocus,
      before,
      className,
      destructive,
      disabled,
      readOnly,
      InputProps: Input,
      ...otherProps
    },
    ref,
  ) => {
    const ariaInvalid = otherProps['aria-invalid'] ?? destructive;

    const computedAutoFocus =
      autoFocus === 'non-touch' ? !isTouchDevice() : autoFocus ?? false;

    return (
      <div
        className={cn(
          inputVariants({ ariaInvalid: !!ariaInvalid, disabled }),
          'px-2 inline-flex flex-row items-center',
          className,
        )}
      >
        {before ? <div className="inline-flex -m-2 z-[1]">{before}</div> : null}
        <input
          ref={ref}
          className={cn(
            'bg-control px-2 w-full outline-none',
            Input?.className,
          )}
          aria-invalid={ariaInvalid}
          disabled={disabled || readOnly}
          readOnly={readOnly}
          // biome-ignore lint/a11y/noAutofocus: there is logic to handle touch devices
          autoFocus={computedAutoFocus}
          {...otherProps}
        />
        {after ? <div className="inline-flex -m-2 z-[1]">{after}</div> : null}
      </div>
    );
  },
);

Input.displayName = 'Input';
