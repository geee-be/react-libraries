import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './index.js';

const meta = {
  component: Tooltip,
  argTypes: {
    color: {
      control: 'select',
      options: [
        'default',
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
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'default',
    delayDuration: 200,
    disableHoverableContent: false,
    size: 'sm',
    arrow: true,
    animation: true,
    sideOffset: 0,
    side: 'right',

    // trigger
    asChild: false,
    content: 'Tooltip content here',
  },
  decorators: (Story) => (
    <span>
      <div>Line one</div>
      <div>Line two</div>
      <div>
        Line three <Story />
      </div>
    </span>
  ),
};
