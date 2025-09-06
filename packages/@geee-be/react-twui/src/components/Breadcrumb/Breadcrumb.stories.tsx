import type { Meta, StoryObj } from '@storybook/react-vite';
import { Bean, Home } from 'lucide-react';
import { WithIcon } from '../WithIcon/index.js';
import { Breadcrumb } from './index.js';

const meta = {
  component: Breadcrumb,
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/">
            <WithIcon iconBefore={<Home />}>Home</WithIcon>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/components">Components</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page>
            <WithIcon iconBefore={<Bean />}>Breadcrumb</WithIcon>
          </Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    ),
  },
};

export const Wrapped: Story = {
  args: {
    children: (
      <Breadcrumb.List className="text-center">
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/">
            <WithIcon iconBefore={<Home />}>Many words in this crumb</WithIcon>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/components">Multi word crumb</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page>
            <WithIcon iconBefore={<Bean />}>Many words in this crumb</WithIcon>
          </Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    ),
  },
  decorators: [
    (Story) => (
      <div className="max-w-28">
        <Story />
      </div>
    ),
  ],
};

export const WrappedWithoutLastItem: Story = {
  args: {
    children: (
      <Breadcrumb.List className="text-center">
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/">
            <WithIcon iconBefore={<Home />}>Many words in this crumb</WithIcon>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/components">Multi word crumb</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page>
            <WithIcon iconBefore={<Bean />}>Many words in this crumb</WithIcon>
          </Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    ),
  },
  decorators: [
    (Story) => (
      <div className="max-w-28">
        <Story />
      </div>
    ),
  ],
};
