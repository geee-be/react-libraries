import type { Meta, StoryObj } from '@storybook/react';
import { InputImageBorder as InputImage } from './index.js';

const meta = {
  component: InputImage,
  argTypes: {},
} satisfies Meta<typeof InputImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSpec: { width: 460, height: 313 },
    placeholder: <p>Drag 'n' drop some files here, or click to select files</p>,
    className: 'w-64',
    shape: 'rectangle',
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/svg+xml': ['.svg'],
      'image/webp': ['.webp'],
    },
  },
};

export const AspectRatio: Story = {
  args: {
    ...Default.args,
    imageSpec: {
      aspectRatio: { minimum: 9 / 16, maximum: 16 / 9 },
      maxHeight: 1800,
    },
    placeholder: <p>Drag 'n' drop some files here, or click to select files</p>,
    className: 'w-64',
    shape: 'rectangle',
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/svg+xml': ['.svg'],
      'image/webp': ['.webp'],
    },
  },
};
