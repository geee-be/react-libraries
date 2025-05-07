'use client';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { forwardRef, useEffect, useState } from 'react';

import { cn } from '../../helpers/utils';
import { Button } from '../Button';
import { Calendar } from '../Calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';

export type DatePickerProps = {
  /** CSS class to apply to the trigger button */
  className?: string;
  /** Whether the date picker is disabled */
  disabled?: boolean;
  /** Default date to display (uncontrolled component) */
  defaultDate?: Date;
  /** Whether the date picker is in a destructive state */
  destructive?: boolean;
  /** Current date value (controlled component) */
  value?: Date;
  /** Format to display the date in, defaults to 'PPP' (e.g., April 3, 2023) */
  dateFormat?: string;
  /** Placeholder text to display when no date is selected */
  placeholder?: string;
  /** Callback when date selection changes */
  onValueChange?: (date: Date | undefined) => void;
  /** Calendar selection mode (default: 'single') */
  mode?: 'single' | 'range' | 'multiple';
  /** Show footer with today button */
  showFooter?: boolean;
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
    const [date, setDate] = useState<Date | undefined>(value || defaultDate);

    // Update internal state when controlled value changes
    useEffect(() => {
      setDate(value || defaultDate);
    }, [value, defaultDate]);

    // Handle date selection
    const handleSelect = (selectedDate: Date | undefined) => {
      setDate(selectedDate);
      onValueChange?.(selectedDate);
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
            {date ? format(date, dateFormat) : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode={mode as any}
            selected={date}
            onSelect={handleSelect}
            defaultMonth={date}
          />
          {renderFooter}
        </PopoverContent>
      </Popover>
    );
  },
);

DatePicker.displayName = 'DatePicker';
