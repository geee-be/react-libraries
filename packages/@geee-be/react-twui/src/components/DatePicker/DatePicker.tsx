'use client';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { forwardRef, useEffect, useState } from 'react';
import type {
  PropsMulti,
  PropsMultiRequired,
  PropsRange,
  PropsRangeRequired,
  PropsSingle,
  PropsSingleRequired,
} from 'react-day-picker';
import { cn } from '../../helpers/utils';
import { Button } from '../Button';
import { Calendar } from '../Calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';

type DatePickerValueProps =
  | PropsSingle
  | PropsSingleRequired
  | PropsMulti
  | PropsMultiRequired
  | PropsRange
  | PropsRangeRequired
  | {
      mode?: undefined;
      required?: undefined;
      selected: unknown;
      onSelect: unknown;
    };

export type DatePickerProps = {
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
} & DatePickerValueProps;

export const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(
  (
    {
      className,
      disabled = false,
      defaultDate,
      destructive,
      selected,
      dateFormat = 'PPP',
      placeholder = 'Pick a date',
      onSelect,
      mode = 'single',
      showFooter = false,
      ...props
    },
    ref,
  ) => {
    // Handle controlled and uncontrolled states
    const [date, setDate] = useState<DatePickerProps['selected']>(
      selected || defaultDate,
    );

    // Update internal state when controlled value changes
    useEffect(() => {
      setDate(selected || defaultDate);
    }, [selected, defaultDate]);

    // Handle date selection
    const handleSelect = (selectedDate: DatePickerProps['selected']) => {
      setDate(selectedDate);
      onSelect?.(selectedDate);
    };

    // Render today button in footer if enabled
    const renderFooter = showFooter ? (
      <div className="p-3 border-t border-paper-border">
        <Button
          size="sm"
          className="w-full justify-center"
          onClick={() => handleSelect(new Date())}
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
              ) : 'from' in date && 'to' in date ? (
                date.from === date.to ? (
                  `${format(date.from, dateFormat)}`
                ) : (
                  `${format(date.from, dateFormat)} - ${format(date.to, dateFormat)}`
                )
              ) : (
                format(date, dateFormat)
              )
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode={mode}
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
            required={false}
          />
          {renderFooter}
        </PopoverContent>
      </Popover>
    );
  },
);

DatePicker.displayName = 'DatePicker';
