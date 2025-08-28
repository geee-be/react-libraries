import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardContent } from '../Card/index.js';
import { Skeleton } from './index.js';

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  argTypes: {},
  decorators: [
    (S) => (
      <Card>
        <CardContent>
          <S />
        </CardContent>
      </Card>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'w-48 h-6',
  },
};

export const Red: Story = {
  args: {
    className: 'w-48 h-6 bg-red-500',
  },
};

export const Circle: Story = {
  args: {
    className: 'w-24 h-24',
    shape: 'circle',
  },
};

export const Input: Story = {
  args: {
    shape: 'input',
  },
};

export const FormControl: Story = {
  args: {
    shape: 'form-control',
    children: <Skeleton shape="input" />,
  },
};
