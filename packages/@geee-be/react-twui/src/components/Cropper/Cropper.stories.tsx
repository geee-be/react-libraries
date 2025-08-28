import type { Meta, StoryObj } from '@storybook/react-vite';
import { Cropper } from './index.js';

const meta = {
  component: Cropper,
  argTypes: {},
  render: (args) => (
    <div className="crop-container absolute inset-6">
      <Cropper {...args} />
    </div>
  ),
} satisfies Meta<typeof Cropper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000',
    aspectRatio: { minimum: 1, maximum: 1 },
  },
};
