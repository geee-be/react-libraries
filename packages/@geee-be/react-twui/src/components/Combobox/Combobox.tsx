'use client';

import { CheckIcon } from '@radix-ui/react-icons';
import { Popover } from '@radix-ui/react-popover';
import { useDebounce } from '@uidotdev/usehooks';
import { LocateIcon } from 'lucide-react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Fragment, forwardRef, useEffect, useState } from 'react';
import { cn } from '../../helpers/utils.js';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
  CommandSeparator,
} from '../Command/Command.js';
import { PopoverContent, PopoverTrigger } from '../Popover/Popover.js';
import { ComboboxTriggerButton } from './ComboboxTriggerButton.js';

export type ComboboxElement = HTMLButtonElement;
type ComboboxRootProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  destructive?: boolean;
  emptyHint?: ReactNode;
  inputPlaceholder?: string;
  onValueChange?: (value: string | undefined) => void;
  placeholder?: ReactNode;
  readOnly?: boolean;
  renderValue?: (key: string) => ReactNode;
  required?: boolean;
  value?: string;
};

export interface StaticComboboxProps extends ComboboxRootProps {
  items: ComboboxGroupProps[];
}

export interface ComboboxProps extends ComboboxRootProps {
  debounceMs?: number;
  items: (seatch: string) => Promise<ComboboxGroupProps[]>;
  loadingHint: ReactNode;
}

export interface ComboboxGroupProps {
  key: string;
  items: ComboboxItemProps[];
  label?: ReactNode;
  loading?: ReactNode;
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

const StaticCombobox = forwardRef<ComboboxElement, StaticComboboxProps>(
  ({ items, ...props }, ref) => {
    const [search, setSearch] = useState('');

    return (
      <ComboboxRoot
        {...props}
        items={items}
        search={search}
        setSearch={setSearch}
        ref={ref}
      />
    );
  },
);

StaticCombobox.displayName = 'StaticCombobox';

const Combobox = forwardRef<ComboboxElement, ComboboxProps>(
  ({ debounceMs = 250, items, loadingHint, ...props }, ref) => {
    const [loadedItems, setLoadedItems] = useState<ComboboxGroupProps[]>([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');

    const debouncedSearch = useDebounce(search, debounceMs);

    // biome-ignore lint/correctness/useExhaustiveDependencies: used in debounce
    useEffect(() => {
      setLoading(true);
    }, [search]);

    // biome-ignore lint/correctness/useExhaustiveDependencies: used in debounce
    useEffect(() => {
      setLoading(true);
      items(debouncedSearch)
        .then((results) => {
          setLoadedItems(results);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [debouncedSearch]);

    return (
      <ComboboxRoot
        {...props}
        items={loadedItems}
        loading={loading ? loadingHint : undefined}
        search={search}
        setSearch={setSearch}
        shouldFilter={false}
        ref={ref}
      />
    );
  },
);

Combobox.displayName = 'Combobox';

const ComboboxRoot = forwardRef<
  ComboboxElement,
  ComboboxRootProps & {
    items: ComboboxGroupProps[];
    loading?: ReactNode;
    search: string;
    setSearch: (value: string) => void;
    shouldFilter?: boolean;
  }
>(
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
      loading,
      name,
      onBlur,
      onValueChange,
      placeholder,
      readOnly,
      renderValue = toDisplay(items),
      required,
      search,
      setSearch,
      shouldFilter = true,
      value,
      type,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);

    return (
      <Popover
        open={open && !disabled}
        onOpenChange={!disabled ? setOpen : undefined}
      >
        <PopoverTrigger
          asChild
          {...props}
          id={id}
          name={id}
          aria-label={ariaLabel}
          disabled={disabled}
          onBlur={onBlur}
          ref={ref}
          className={className}
        >
          <ComboboxTriggerButton
            aria-expanded={open && !disabled}
            children={value ? renderValue(value) : undefined}
            disabled={disabled}
            placeholder={placeholder}
          />
        </PopoverTrigger>
        <PopoverContent
          className={cn('border-none p-0')}
          style={{ width: 'var(--radix-popper-anchor-width)' }}
        >
          <Command shouldFilter={shouldFilter}>
            <CommandInput
              icon={<LocateIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />}
              placeholder={inputPlaceholder}
              value={search}
              onValueChange={setSearch}
            />
            <CommandList>
              {loading ? (
                <CommandLoading>{loading}</CommandLoading>
              ) : (
                <>
                  <CommandEmpty>{emptyHint}</CommandEmpty>
                  {items.map((group, groupIndex) => (
                    <Fragment key={group.key}>
                      {groupIndex > 0 ? <CommandSeparator /> : null}
                      <CommandGroup heading={group.label}>
                        {group.loading ? (
                          <CommandLoading>{group.loading}</CommandLoading>
                        ) : (
                          group.items.map((item) => (
                            <CommandItem
                              key={item.key}
                              value={item.key}
                              disabled={item.disabled}
                              onSelect={(currentValue) => {
                                onValueChange?.(
                                  currentValue === value
                                    ? undefined
                                    : currentValue,
                                );
                                setOpen(false);
                              }}
                            >
                              {value === item.key ? (
                                <span
                                  className={cn(
                                    'absolute left-0 w-6 inline-flex items-center justify-center',
                                    value === item.key
                                      ? 'opacity-100'
                                      : 'opacity-0',
                                  )}
                                >
                                  <CheckIcon />
                                </span>
                              ) : null}
                              {item.label}
                            </CommandItem>
                          ))
                        )}
                      </CommandGroup>
                    </Fragment>
                  ))}
                </>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
);

ComboboxRoot.displayName = 'ComboboxRoot';

export { StaticCombobox, Combobox };
