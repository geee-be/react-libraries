import type { Meta, StoryObj } from '@storybook/react-vite';
import { YearPicker } from './index.js';

const meta = {
  component: YearPicker,
  argTypes: {},
} satisfies Meta<typeof YearPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'w-64',
  },
};

export const Future: Story = {
  args: {
    className: 'w-64',
    min: new Date().getFullYear(),
    max: new Date().getFullYear() + 3,
  },
};

export const FutureLonger: Story = {
  args: {
    className: 'w-64',
    min: new Date().getFullYear(),
    max: new Date().getFullYear() + 10,
  },
};

export const FuturePlusOne: Story = {
  args: {
    className: 'w-64',
    min: new Date().getFullYear(),
    max: new Date().getFullYear() + 5,
    value: new Date().getFullYear() + 1,
  },
};

export const Year1983: Story = {
  args: {
    className: 'w-64',
    value: 1983,
  },
};
