import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DatePicker } from './';

const meta = {
  component: DatePicker,
  argTypes: {},
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'w-64',
  },
};

export const WithDefaultDate: Story = {
  args: {
    className: 'w-64',
    value: new Date('2025-01-15'),
  },
};

export const WithDateFormat: Story = {
  args: {
    className: 'w-64',
    dateFormat: 'dd/MM/yyyy',
  },
};

export const Disabled: Story = {
  args: {
    className: 'w-64',
    disabled: true,
  },
};

export const WithPlaceholder: Story = {
  args: {
    className: 'w-64',
    placeholder: 'Select a date...',
  },
};

export const WithDateRange: Story = {
  args: {
    className: 'w-64',
    mode: 'range',
    placeholder: 'Select date range',
  },
};

export const WithFooter: Story = {
  args: {
    className: 'w-64',
    showFooter: true,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <div className="space-y-4">
        <DatePicker
          {...args}
          value={date}
          onValueChange={(newDate) => setDate(newDate)}
        />
        <div>Selected date: {date ? date.toDateString() : 'None'}</div>
        <button
          type="button"
          className="px-4 py-2 bg-primary text-primary-fg rounded"
          onClick={() => setDate(undefined)}
        >
          Clear
        </button>
      </div>
    );
  },
};
