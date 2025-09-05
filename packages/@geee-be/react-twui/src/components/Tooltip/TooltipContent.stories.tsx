import { Portal, Provider, Root, Trigger } from '@radix-ui/react-tooltip';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './index.js';

const meta = {
  component: Tooltip.Content,
  argTypes: {},
} satisfies Meta<typeof Tooltip.Content>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    arrow: true,
    animation: true,
    content: 'Tooltip content here',
  },
  decorators: (Story) => (
    <Provider>
      <Root defaultOpen={true} disableHoverableContent={true} open={true}>
        <Trigger>Tooltip</Trigger>
        <Portal>
          <Story />
        </Portal>
      </Root>
    </Provider>
  ),
};
