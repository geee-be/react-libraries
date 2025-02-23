import type { Meta, StoryObj } from '@storybook/react';
import { YearOfBirthPicker } from './index.js';

const meta = {
  component: YearOfBirthPicker,
  argTypes: {},
} satisfies Meta<typeof YearOfBirthPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'w-64',
  },
};

export const Year1983: Story = {
  args: {
    className: 'w-64',
    value: 1983,
  },
};
