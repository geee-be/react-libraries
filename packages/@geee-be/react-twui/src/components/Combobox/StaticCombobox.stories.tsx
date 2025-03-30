import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import type { ComboboxGroupProps } from './Combobox.js';
import { StaticCombobox } from './Combobox.js';

const meta: Meta<typeof StaticCombobox> = {
  component: StaticCombobox,
  decorators: (Story, ctx) => {
    const [, setArgs] = useArgs<typeof ctx.args>();

    const onValueChange = (value: string | undefined): void => {
      ctx.args.onValueChange?.(value);

      // Check if the component is controlled
      if (ctx.args.value !== undefined) {
        setArgs({ value });
      }
    };

    return (
      <div className="my-16 mx-8">
        <Story args={{ ...ctx.args, onValueChange }} />
      </div>
    );
  },
  render: ({ ...args }) => {
    const [value, setValue] = useState(args.value);

    return <StaticCombobox {...args} value={value} onValueChange={setValue} />;
  },
} satisfies Meta<typeof StaticCombobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: ComboboxGroupProps[] = [
  {
    key: 'numbers',
    label: 'Numbers',
    items: [
      {
        key: 'one',
        label: 'One',
      },
      {
        key: 'two',
        label: 'Two',
      },
      {
        key: 'three',
        label: 'Three',
        disabled: true,
      },
      {
        key: 'four',
        label: 'Four',
      },
    ],
  },
  {
    key: 'loading',
    items: [],
    label: 'Will never load',
    loading: 'Loading...',
  },
];

export const Default: Story = {
  args: {
    disabled: false,
    emptyHint: 'No results found.',
    inputPlaceholder: 'Search...',
    placeholder: 'Select your value here',
    items,
    onValueChange: (value: unknown) => console.log(value),
    className: 'w-64',
  },
};
