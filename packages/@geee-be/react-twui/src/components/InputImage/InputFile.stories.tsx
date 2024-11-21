import type { Meta, StoryObj } from '@storybook/react';
import { InputFile } from './index.js';

const meta = {
  component: InputFile,
  argTypes: {},
} satisfies Meta<typeof InputFile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'w-64',
    shape: 'rectangle',
    accept: {
      'image/gif': ['.gif'],
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/svg+xml': ['.svg'],
      'image/webp': ['.webp'],
    },
    children: "Drag 'n' drop some files here, or click to select files",
  },
};
