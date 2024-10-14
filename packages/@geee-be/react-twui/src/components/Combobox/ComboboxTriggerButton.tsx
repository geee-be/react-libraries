import { ChevronDownIcon } from '@radix-ui/react-icons';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';
import { Style } from '../../helpers/style';
import { cn } from '../../helpers/utils';
import { Button } from '../Button';

const ComboboxTriggerButton = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<typeof Button> & {
    placeholder: ReactNode;
  }
>(
  (
    {
      'aria-expanded': ariaExpanded,
      children,
      className,
      disabled,
      placeholder,
      ...props
    },
    ref,
  ) => (
    <Button
      ref={ref}
      variant="input"
      role="combobox"
      aria-expanded={ariaExpanded}
      {...props}
      disabled={disabled}
      className={cn(
        'justify-between',
        disabled && [Style.inputColorStateDisabled(), 'opacity-100'],
        className,
      )}
    >
      <div className="min-w-0">
        {children ? (
          <div className="truncate select-none text-control-fg">{children}</div>
        ) : (
          <div className="truncate select-none text-control-fg/50">
            {placeholder}
          </div>
        )}
      </div>
      <div
        className={cn(
          'text-control-fg right-0 ml-2',
          disabled && 'text-transparent',
        )}
      >
        <ChevronDownIcon />
      </div>
    </Button>
  ),
);

ComboboxTriggerButton.displayName = Button.displayName;

export { ComboboxTriggerButton };
