'use client';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { forwardRef, useEffect, useState } from 'react';
import type { DateRange, Modifiers, OnSelectHandler } from 'react-day-picker';
import { cn } from '../../helpers/utils';
import { Button } from '../Button';
import { Calendar } from '../Calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';

type ValueProps<T> = {
  /** Current date value (controlled component) */
  value?: T;
  /** Callback when date selection changes */
  onValueChange?: (date: T | undefined) => void;
};

type DatePickerModeProps =
  | ({
      mode: 'single';
    } & ValueProps<Date>)
  | ({
      mode: 'multiple';
    } & ValueProps<Date[]>)
  | ({
      mode: 'range';
    } & ValueProps<DateRange>);

export type DatePickerProps = DatePickerModeProps & {
  /** CSS class to apply to the trigger button */
  className?: string;
  /** Whether the date picker is disabled */
  disabled?: boolean;
  /** Default date to display (uncontrolled component) */
  defaultDate?: Date;
  /** Whether the date picker is in a destructive state */
  destructive?: boolean;
  /** Format to display the date in, defaults to 'PPP' (e.g., April 3, 2023) */
  dateFormat?: string;
  /** Placeholder text to display when no date is selected */
  placeholder?: string;
  /** Show footer with today button */
  showFooter?: boolean;
};

const isDateRange = (date: unknown): date is DateRange => {
  const { from, to } = date as DateRange;
  return !!date && from instanceof Date && to instanceof Date;
};

export const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(
  (
    {
      className,
      disabled = false,
      defaultDate,
      destructive,
      value,
      dateFormat = 'PPP',
      placeholder = 'Pick a date',
      onValueChange,
      mode = 'single',
      showFooter = false,
      ...props
    },
    ref,
  ) => {
    // Handle controlled and uncontrolled states
    const [date, setDate] = useState<Date | DateRange | Date[] | undefined>(
      value || defaultDate,
    );

    // Update internal state when controlled value changes
    useEffect(() => {
      setDate(value || defaultDate);
    }, [value, defaultDate]);

    // Handle date selection
    const handleSelect = (
      selectedDate: DatePickerModeProps['value'],
      triggerDate: Date,
      modifiers: Modifiers,
      e: React.MouseEvent | React.KeyboardEvent,
    ) => {
      setDate(selectedDate);
      (
        onValueChange as
          | OnSelectHandler<DatePickerModeProps['value']>
          | undefined
      )?.(selectedDate, triggerDate, modifiers, e);
    };

    // Render today button in footer if enabled
    const renderFooter = showFooter ? (
      <div className="p-3 border-t border-paper-border">
        <Button
          size="sm"
          className="w-full justify-center"
          onClick={(evt) => {
            switch (mode) {
              case 'single':
                handleSelect(new Date(), new Date(), {}, evt);
                break;
              case 'range':
                handleSelect(
                  { from: new Date(), to: new Date() },
                  new Date(),
                  {},
                  evt,
                );
                break;
              case 'multiple':
                handleSelect([new Date()], new Date(), {}, evt);
                break;
            }
          }}
        >
          Today
        </Button>
      </div>
    ) : null;

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="input"
            color={destructive ? 'error' : 'default'}
            disabled={disabled}
            className={cn(
              'justify-start text-left font-normal',
              !date && 'text-control-fg/70',
              className,
            )}
            before={<CalendarIcon className="h-4 w-4 text-control-fg" />}
            {...props}
          >
            {date ? (
              Array.isArray(date) ? (
                date.length ? (
                  date.map((d) => format(d, dateFormat)).join(', ')
                ) : (
                  placeholder
                )
              ) : isDateRange(date) ? (
                date.from === date.to ? (
                  date.from ? (
                    `${format(date.from, dateFormat)}`
                  ) : (
                    placeholder
                  )
                ) : date.from && date.to ? (
                  `${format(date.from, dateFormat)} - ${format(date.to, dateFormat)}`
                ) : (
                  placeholder
                )
              ) : date ? (
                format(date, dateFormat)
              ) : (
                placeholder
              )
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            // biome-ignore lint/suspicious/noExplicitAny: just can't figure it out otherwise
            mode={mode as any}
            selected={date}
            onSelect={handleSelect}
            defaultMonth={
              date
                ? Array.isArray(date)
                  ? date[0]
                  : 'from' in date
                    ? date.from
                    : date
                : undefined
            }
          />
          {renderFooter}
        </PopoverContent>
      </Popover>
    );
  },
);

DatePicker.displayName = 'DatePicker';
