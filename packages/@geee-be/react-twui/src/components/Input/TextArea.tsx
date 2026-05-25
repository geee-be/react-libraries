import type { TextareaHTMLAttributes } from 'react';
import { cn } from '../../helpers/utils.js';
import { textareaVariants } from './variants.js';

/* ---------------------------------- Types --------------------------------- */
export type TextAreaElement = HTMLTextAreaElement;
export type TextAreaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
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

  TextAreaProps?: {
    /**
     * The class name to be applied to the textarea element.
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
export const TextArea = ({
  ref,
  after,
  autoFocus,
  before,
  className,
  destructive,
  disabled,
  readOnly,
  TextAreaProps: TextArea,
  ...otherProps
}: TextAreaProps & { ref?: React.Ref<TextAreaElement> }) => {
  const ariaInvalid = otherProps['aria-invalid'] ?? destructive;

  const computedAutoFocus =
    autoFocus === 'non-touch' ? !isTouchDevice() : (autoFocus ?? false);

  return (
    <div
      className={cn(
        textareaVariants({ ariaInvalid: !!ariaInvalid, disabled }),
        'px-2 py-2 inline-flex flex-row items-start',
        className,
      )}
    >
      {before ? <div className="inline-flex -m-2 z-1">{before}</div> : null}
      <textarea
        ref={ref}
        className={cn(
          'px-2 min-h-20 w-full resize-y outline-none',
          TextArea?.className,
        )}
        aria-invalid={ariaInvalid}
        disabled={disabled || readOnly}
        readOnly={readOnly}
        // biome-ignore lint/a11y/noAutofocus: there is logic to handle touch devices
        autoFocus={computedAutoFocus}
        {...otherProps}
      />
      {after ? <div className="inline-flex -m-2 z-1">{after}</div> : null}
    </div>
  );
};

TextArea.displayName = 'TextArea';
