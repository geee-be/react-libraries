import type { Meta, StoryObj } from '@storybook/react-vite';
import { addDays } from 'date-fns';
import { Calendar } from './index.js';

const meta = {
  component: Calendar,
  argTypes: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithSelectedDate: Story = {
  args: {
    selected: new Date(),
  },
};

export const WithDisabledDates: Story = {
  args: {
    disabled: [
      { from: addDays(new Date(), 5), to: addDays(new Date(), 10) },
      { from: addDays(new Date(), 15), to: addDays(new Date(), 20) },
    ],
    defaultMonth: new Date(),
  },
};

export const DateRange: Story = {
  args: {
    mode: 'range',
    selected: {
      from: new Date(),
      to: addDays(new Date(), 7),
    },
    defaultMonth: new Date(),
  },
};

export const WithFooter: Story = {
  args: {
    mode: 'single',
    // captionLayout: 'dropdown',
    selected: new Date(),
    disabled: [{ after: new Date() }],
    endMonth: new Date(),
    footer: (
      <div className="text-center text-sm text-muted-foreground py-2">
        Click to select a date
      </div>
    ),
  },
};
