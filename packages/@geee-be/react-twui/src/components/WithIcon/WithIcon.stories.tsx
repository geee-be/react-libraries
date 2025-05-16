import type { Meta, StoryObj } from '@storybook/react';
import {
  Calendar,
  Check,
  ChevronRight,
  Home,
  Info,
  Mail,
  Settings,
  User,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { WithIcon } from './index';

// Define the Props type explicitly to match the component
interface WithIconProps {
  className?: string;
  'data-content'?: string;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  noWrap?: boolean;
}

const meta: Meta<typeof WithIcon> = {
  component: WithIcon,
  argTypes: {
    className: { control: 'text' },
    'data-content': { control: 'text' },
    noWrap: { control: 'boolean', defaultValue: false },
    iconBefore: { table: { disable: true } },
    iconAfter: { table: { disable: true } },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'WithIcon Text',
  },
};

export const WithIconBefore: Story = {
  args: {
    children: 'Icon Before Text',
    iconBefore: <Home />,
  },
};

export const WithIconAfter: Story = {
  args: {
    children: 'Icon After Text',
    iconAfter: <ChevronRight />,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Text With Both Icons',
    iconBefore: <User />,
    iconAfter: <ChevronRight />,
  },
};

export const CustomClass: Story = {
  args: {
    children: 'Custom Class Applied',
    iconBefore: <Info />,
    className: 'text-blue-500 font-bold',
  },
};

export const InlineText: Story = {
  args: {
    children: 'Text With Both Icons',
    iconBefore: <User />,
    iconAfter: <ChevronRight />,
  },
  decorators: [
    (Story) => (
      <>
        <Story /> Hello World!
      </>
    ),
  ],
};

export const WithNoWrap: Story = {
  args: {
    children:
      'This text will not wrap even if it is very very very long and would normally wrap onto multiple lines',
    iconBefore: <Mail />,
    iconAfter: <ChevronRight />,
    noWrap: true,
  },
  decorators: [
    (Story) => (
      <div className="max-w-[200px] border border-gray-300 p-4">
        <Story />
      </div>
    ),
  ],
};

export const WithWrap: Story = {
  args: {
    children:
      'This text will wrap when it reaches the edge of its container since noWrap is not specified',
    iconBefore: <Mail />,
    iconAfter: <ChevronRight />,
  },
  decorators: [
    (Story) => (
      <div className="max-w-[200px] border border-gray-300 p-4">
        <Story />
      </div>
    ),
  ],
};

export const WithDataContent: Story = {
  args: {
    children: 'Data Content Attribute',
    iconBefore: <Settings />,
    'data-content': 'settings-icon',
  },
};

export const IconSizing: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-sm">
        <WithIcon
          iconBefore={<Calendar className="text-primary" />}
          iconAfter={<Check className="text-success" />}
        >
          Small Text Size (text-sm)
        </WithIcon>
      </div>
      <div className="text-base">
        <WithIcon
          iconBefore={<Calendar className="text-primary" />}
          iconAfter={<Check className="text-success" />}
        >
          Base Text Size (text-base)
        </WithIcon>
      </div>
      <div className="text-lg">
        <WithIcon
          iconBefore={<Calendar className="text-primary" />}
          iconAfter={<Check className="text-success" />}
        >
          Large Text Size (text-lg)
        </WithIcon>
      </div>
      <div className="text-xl">
        <WithIcon
          iconBefore={<Calendar className="text-primary" />}
          iconAfter={<Check className="text-success" />}
        >
          Extra Large Text (text-xl)
        </WithIcon>
      </div>
      <div className="text-2xl">
        <WithIcon
          iconBefore={<Calendar className="text-primary" />}
          iconAfter={<Check className="text-success" />}
        >
          2XL Text Size (text-2xl)
        </WithIcon>
      </div>
    </div>
  ),
};
