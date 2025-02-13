import type { Meta, StoryObj } from '@storybook/react';
import { Bean, Home } from 'lucide-react';
import { WithIcon } from '../WithIcon/index.js';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './index.js';

const meta = {
  component: Breadcrumb,
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <WithIcon iconBefore={<Home />}>Home</WithIcon>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>
            <WithIcon iconBefore={<Bean />}>Breadcrumb</WithIcon>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    ),
  },
};

export const Wrapped: Story = {
  args: {
    children: (
      <BreadcrumbList className="text-center">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <WithIcon iconBefore={<Home />}>Many words in this crumb</WithIcon>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Multi word crumb</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>
            <WithIcon iconBefore={<Bean />}>Many words in this crumb</WithIcon>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    ),
  },
  decorators: [
    (Story) => (
      <div className="max-w-[7rem]">
        <Story />
      </div>
    ),
  ],
};

export const WrappedWithoutLastItem: Story = {
  args: {
    children: (
      <BreadcrumbList className="text-center">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <WithIcon iconBefore={<Home />}>Many words in this crumb</WithIcon>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Multi word crumb</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>
            <WithIcon iconBefore={<Bean />}>Many words in this crumb</WithIcon>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    ),
  },
  decorators: [
    (Story) => (
      <div className="max-w-[7rem]">
        <Story />
      </div>
    ),
  ],
};
