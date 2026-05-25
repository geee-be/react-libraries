import { DragHandleDots2Icon } from '@radix-ui/react-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { XIcon } from 'lucide-react';
import { Button } from '../Button/Button.js';
import { TextArea } from './index.js';

const meta = {
  component: TextArea,
  argTypes: {
    placeholder: { control: 'text' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    placeholder: 'This is a placeholder',
  },
};

export const Icons: Story = {
  args: {
    disabled: false,
    placeholder: 'This is a placeholder',
    before: (
      <Button
        shape="icon"
        size="sm"
        variant="ghost"
        className="mx-1"
        before={<DragHandleDots2Icon />}
      />
    ),
    after: (
      <Button
        shape="icon"
        size="sm"
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
    placeholder: 'Tell us more',
    before: <div className="pl-4 pt-2">Note</div>,
    after: (
      <Button
        shape="icon"
        size="sm"
        variant="ghost"
        className="mx-1"
        after={<XIcon />}
      />
    ),
  },
};
