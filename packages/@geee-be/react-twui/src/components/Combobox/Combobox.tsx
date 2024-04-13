'use client';

import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import { Popover } from '@radix-ui/react-popover';
import { CommandSeparator } from 'cmdk';
import { LocateIcon } from 'lucide-react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Fragment, forwardRef, useState } from 'react';
import { cn } from '../../helpers/utils.js';
import { Button } from '../Button/index.js';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../Command/Command.js';
import { PopoverContent, PopoverTrigger } from '../Popover/Popover.js';

export type ComboboxElement = HTMLButtonElement;
export type ComboboxProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  destructive?: boolean;
  emptyHint?: ReactNode;
  inputPlaceholder?: string;
  items: ComboboxGroupProps[];
  onValueChange?: (value: string | undefined) => void;
  placeholder?: ReactNode;
  readOnly?: boolean;
  renderValue?: (key: string) => ReactNode;
  required?: boolean;
  value?: string;
};

export interface ComboboxGroupProps {
  key: string;
  label?: ReactNode;
  items: ComboboxItemProps[];
}

export interface ComboboxItemProps {
  key: string;
  label: ReactNode;
  // TODO: keywords
  disabled?: boolean;
}

const toDisplay =
  (items: ComboboxGroupProps[]) =>
  (key: string): ReactNode => {
    for (const group of items) {
      for (const item of group.items) {
        if (item.key === key) {
          return item.label;
        }
      }
    }
    return key;
  };

export const Combobox = forwardRef<ComboboxElement, ComboboxProps>(
  (
    {
      'aria-label': ariaLabel,
      className,
      destructive,
      disabled,
      emptyHint,
      id,
      inputPlaceholder,
      items,
      name,
      onBlur,
      onValueChange,
      placeholder,
      readOnly,
      renderValue = toDisplay(items),
      required,
      value,
      type,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    // const [value, setValue] = useState<string>();

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          asChild
          {...props}
          id={id}
          name={id}
          aria-label={ariaLabel}
          disabled={disabled}
          onBlur={onBlur}
          ref={ref}
        >
          <Button
            variant="input"
            role="combobox"
            aria-expanded={open}
            className={cn(
              'shadow-none hover:shadow-none focus:shadow-none',
              disabled && 'cursor-not-allowed',
              disabled &&
                'bg-control text-control-fg/50 placeholder:text-control-fg/50 border-default/50 hover:border-default/50',
              className,
            )}
          >
            <div className="min-w-0">
              {value ? (
                <div className="truncate select-none text-control-fg">
                  {renderValue(value)}
                </div>
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
        </PopoverTrigger>
        <PopoverContent
          className={cn('border-none p-0')}
          style={{ width: 'var(--radix-popper-anchor-width)' }}
        >
          <Command>
            <CommandInput
              icon={<LocateIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />}
              placeholder={inputPlaceholder}
            />
            <CommandList>
              <CommandEmpty>{emptyHint}</CommandEmpty>
              {items.map((group, groupIndex) => (
                <Fragment key={group.key}>
                  {groupIndex > 0 ? (
                    <CommandSeparator className="h-[1px] bg-control-fg/10 m-1" />
                  ) : null}
                  <CommandGroup heading={group.label}>
                    {group.items.map((item) => (
                      <CommandItem
                        key={item.key}
                        value={item.key}
                        disabled={item.disabled}
                        onSelect={(currentValue) => {
                          onValueChange?.(
                            currentValue === value ? undefined : currentValue,
                          );
                          setOpen(false);
                        }}
                      >
                        {value === item.key ? (
                          <span
                            className={cn(
                              'absolute left-0 w-6 inline-flex items-center justify-center',
                              value === item.key ? 'opacity-100' : 'opacity-0',
                            )}
                          >
                            <CheckIcon />
                          </span>
                        ) : null}
                        {item.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Fragment>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
);

Combobox.displayName = 'Select';
