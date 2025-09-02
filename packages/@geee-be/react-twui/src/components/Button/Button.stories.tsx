import { UserIcon } from '@iconicicons/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Spinner } from '../Spinner/Spinner.js';
import { Button } from './index.js';

const meta = {
  component: Button,
  argTypes: {
    after: { table: { disable: true } },
    before: { table: { disable: true } },
    asChild: { table: { disable: true } },
    disabled: { control: 'boolean', defaultValue: { summary: false } },
    shape: {
      control: 'select',
      options: ['rounded', 'icon', 'pill'],
      defaultValue: { summary: 'rounded' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      defaultValue: { summary: 'md' },
    },
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
        'danger',
      ],
      defaultValue: { summary: 'default' },
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'input', 'card', 'link'],
      defaultValue: { summary: 'solid' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    color: 'default',
    variant: 'solid',
    size: 'md',
    shape: 'rounded',
  },
};

export const IconBefore: Story = {
  args: {
    ...Default.args,
    before: <UserIcon />,
  },
};

export const SpinnerBefore: Story = {
  args: {
    ...Default.args,
    before: <Spinner color="foreground" />,
  },
};

export const IconAfter: Story = {
  args: {
    ...Default.args,
    after: <UserIcon />,
  },
};

export const Disable: Story = {
  render: () => {
    const [busy, setBusy] = useState(false);

    const handleClick = () => {
      setBusy(true);
      setTimeout(() => setBusy(false), 2000);
    };
    return (
      <Button
        {...Default.args}
        onClick={handleClick}
        disabled={busy}
        color="primary"
      >
        Test me
      </Button>
    );
  },
};
