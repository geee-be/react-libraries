import { DragHandleDots2Icon } from '@radix-ui/react-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { XIcon } from 'lucide-react';
import { Button } from '../Button/Button.js';
import { Input } from './index.js';

const meta = {
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    placeholder: 'This is a placeholder',
    // color: 'default',
  },
};

export const Icons: Story = {
  args: {
    disabled: false,
    placeholder: 'This is a placeholder',
    before: (
      <Button
        size="xs-icon"
        variant="ghost"
        className="mx-1"
        before={<DragHandleDots2Icon />}
      />
    ),
    after: (
      <Button
        size="xs-icon"
        variant="ghost"
        className="mx-1"
        after={<XIcon />}
      />
    ),
  },
};

export const TextBefore: Story = {
  args: {
    disabled: false,
    placeholder: 'example.com',
    before: <div className="pl-4">https://</div>,
    after: (
      <Button
        size="xs-icon"
        variant="ghost"
        className="mx-1"
        after={<XIcon />}
      />
    ),
  },
};

export const DateInput: Story = {
  args: {
    ...Default.args,
    type: 'date',
    className: 'w-96',
  },
};
