'use client';

import { type ChangeEvent, forwardRef, type InputHTMLAttributes } from 'react';
import { YearPicker } from './YearPicker';

type YearOfBirthPickerElement = Omit<HTMLInputElement, 'onChange' | 'value'> & {
  onChange: (event: ChangeEvent<YearOfBirthPickerElement>) => void;
  value?: number;
};

export type YearOfBirthPickerProps = Omit<
  InputHTMLAttributes<YearOfBirthPickerElement>,
  'type' | 'autoFocus' | 'min' | 'max' | 'placeholder'
> & {
  destructive?: boolean;
  max?: number;
  min?: number;
  value?: number;
};

export const YearOfBirthPicker = forwardRef<
  YearOfBirthPickerElement,
  YearOfBirthPickerProps
>(({ className, destructive, disabled, onChange, ...props }, ref) => (
  <YearPicker
    ref={ref}
    {...props}
    formatValue={(value) => `Born in ${value}`}
    inputPlaceholder="Enter year"
    placeholder="Select birth year"
  />
));

YearOfBirthPicker.displayName = 'YearOfBirthPicker';
