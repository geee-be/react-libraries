import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './index.js';

const meta = {
  component: Checkbox,
  argTypes: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    label: 'This is a label',
    helperText: 'This is a helper text',
    tooltip: 'This is a tooltip',
    description: 'This is a description',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    ...Default.args,
    disabled: true,
    checked: true,
  },
};
