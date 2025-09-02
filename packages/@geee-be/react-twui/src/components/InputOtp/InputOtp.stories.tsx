import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  InputOtp,
  InputOtpGroup,
  InputOtpSeparator,
  InputOtpSlot,
} from './index.js';

const meta = {
  component: InputOtp,
  argTypes: {},
} satisfies Meta<typeof InputOtp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxLength: 6,
    children: (
      <>
        <InputOtpGroup>
          <InputOtpSlot index={0} />
          <InputOtpSlot index={1} />
          <InputOtpSlot index={2} />
        </InputOtpGroup>
        <InputOtpSeparator />
        <InputOtpGroup>
          <InputOtpSlot index={3} />
          <InputOtpSlot index={4} />
          <InputOtpSlot index={5} />
        </InputOtpGroup>
      </>
    ),
    disableAutoComplete: true,
  },
};
