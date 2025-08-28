import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './index.js';

const meta = {
  component: Spinner,
  argTypes: {
    color: {
      control: 'select',
      options: [
        'default',
        'gray',
        'primary',
        'secondary',
        'info',
        'warning',
        'success',
        'error',
      ],
      defaultValue: { summary: 'default' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
