'use client';

import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ChangeEvent,
  type ElementRef,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';
import { Style } from '../../helpers/style';
import { cn } from '../../helpers/utils';
import { Button } from '../Button';
import { Input } from '../Input';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';

type YearPickerElement = Omit<HTMLInputElement, 'onChange' | 'value'> & {
  onChange: (event: ChangeEvent<YearPickerElement>) => void;
  value?: number;
};

export type YearPickerProps = Omit<
  InputHTMLAttributes<YearPickerElement>,
  'type' | 'autoFocus' | 'min' | 'max'
> & {
  destructive?: boolean;
  formatValue?: (value: number) => ReactNode;
  inputPlaceholder?: string;
  max?: number;
  min?: number;
  value?: number;
};

export const YearPicker = forwardRef<YearPickerElement, YearPickerProps>(
  (
    {
      className,
      destructive,
      disabled,
      formatValue = (value) => `Year ${value}`,
      inputPlaceholder = 'Enter year',
      onChange,
      placeholder = 'Select year',
      value,
      ...props
    },
    ref,
  ) => {
    const currentYear = new Date().getFullYear();
    const min = props.min ?? 1900;
    const max = Math.min(currentYear, props.max ?? currentYear);

    const buttonRef = useRef<HTMLButtonElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const popoverRef = useRef<ElementRef<typeof Popover>>(null);

    useImperativeHandle(
      ref,
      () => {
        return {
          ...inputRef.current,
          focus: (options?: FocusOptions) => {
            buttonRef.current?.focus(options);
          },
        } as YearPickerElement;
      },
      [],
    );

    const [open, setOpen] = useState(false);
    const [internalValue, setInternalValue] = useState<number | undefined>(
      value,
    );
    const [year, setYear] = useState<number | undefined>(value);
    const [inputYear, setInputYear] = useState(value?.toString() ?? '');
    const [decade, setDecade] = useState(
      Math.floor((value ?? currentYear - 10) / 10) * 10,
    );

    useEffect(() => {
      if (!year) return;
      setDecade(Math.floor(year / 10) * 10);
    }, [year]);

    const years = Array.from({ length: 10 }, (_, i) => decade + i).filter(
      (y) => y <= currentYear,
    );

    const fireOnChange = (selectedYear?: number) => {
      if (!onChange || !inputRef.current) return;
      onChange({
        target: {
          ...inputRef.current,
          value: selectedYear,
          // Add other properties from the target that you might need
        } as YearPickerElement,
        currentTarget: {
          ...inputRef.current,
          value: selectedYear,
          // Add other properties from the currentTarget if needed
        } as YearPickerElement,
        bubbles: true,
        cancelable: true,
        defaultPrevented: false,
        eventPhase: 3,
        isDefaultPrevented: () => false,
        isPropagationStopped: () => false,
        isTrusted: true,
        nativeEvent: {} as Event, // Mocking the native event object
        persist: () => {},
        preventDefault: () => {},
        stopPropagation: () => {},
        timeStamp: Date.now(),
        type: 'change',
      });
    };

    const handleYearSelected = (selectedYear?: number) => {
      setYear(selectedYear);
      setInternalValue(selectedYear);
      setInputYear(selectedYear?.toString() ?? '');
      setOpen(false);
      fireOnChange(selectedYear);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInputYear(value);
      const parsedYear = Number.parseInt(value, 10);
      if (!Number.isNaN(parsedYear) && parsedYear >= min && parsedYear <= max) {
        setYear(parsedYear);
      } else {
        setYear(undefined);
      }
    };

    const handleDecadeChange = (change: number) => {
      const newDecade = decade + change * 10;
      if (newDecade >= min && newDecade < max) {
        setDecade(newDecade);
      }
    };

    const ariaInvalid = props['aria-invalid'] ?? destructive;

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={buttonRef}
            variant="input"
            disabled={disabled}
            className={cn(
              ariaInvalid && Style.inputColorStateError(),
              disabled && [Style.inputColorStateDisabled(), 'opacity-100'],
              !internalValue && 'text-control-fg/50',
              className,
            )}
            before={<CalendarIcon className="mr-2 h-4 w-4" />}
            onClick={() => setOpen(true)}
          >
            {internalValue ? (
              formatValue(internalValue)
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent ref={popoverRef} className="w-64 p-3">
          <div className="flex items-center justify-between p-2 select-none">
            <Button
              variant="outline"
              shape="pill"
              size="sm-icon"
              isIconOnly
              onClick={() => handleDecadeChange(-1)}
              disabled={decade <= 1900}
              before={<ChevronLeftIcon />}
            />
            <div className="font-semibold">{decade}s</div>
            <Button
              variant="outline"
              shape="pill"
              size="sm-icon"
              isIconOnly
              onClick={() => handleDecadeChange(1)}
              disabled={decade >= Math.floor(currentYear / 10) * 10}
              after={<ChevronRightIcon />}
            />
          </div>
          <div className="grid grid-cols-2 gap-2 p-2">
            {years.map((y) => (
              <Button
                key={y}
                onClick={() => handleYearSelected(y)}
                variant={year === y ? 'solid' : 'outline'}
                className="w-full"
              >
                {y}
              </Button>
            ))}
          </div>
          <form
            className="p-2"
            onSubmit={(e) => {
              e.preventDefault();
              handleYearSelected(year);
            }}
          >
            <Input
              {...(props as InputHTMLAttributes<HTMLInputElement>)}
              ref={inputRef}
              type="number"
              autoFocus="non-touch"
              placeholder={inputPlaceholder}
              value={inputYear}
              onChange={handleInputChange}
              min={min}
              max={max}
              className="w-full"
            />
          </form>
        </PopoverContent>
      </Popover>
    );
  },
);

YearPicker.displayName = 'YearPicker';
