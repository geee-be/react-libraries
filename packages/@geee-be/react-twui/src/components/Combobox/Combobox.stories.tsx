import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { useArgs } from 'storybook/preview-api';
import type { ComboboxGroupProps } from './Combobox.js';
import { Combobox } from './Combobox.js';

const meta: Meta<typeof Combobox> = {
  component: Combobox,
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

    return <Combobox {...args} value={value} onValueChange={setValue} />;
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: ComboboxGroupProps[] = [
  {
    key: 'numbers',
    label: 'Numbers',
    items: [
      {
        key: '1',
        label: 'One',
      },
      {
        key: '2',
        label: 'Two',
      },
      {
        key: '3',
        label: 'Three',
        disabled: true,
      },
      {
        key: '4',
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

export const Filter: Story = {
  args: {
    disabled: false,
    shouldFilter: true,
    emptyHint: 'No results found.',
    inputPlaceholder: 'Search...',
    placeholder: 'Select your value here',
    debounceMs: 750,
    items: (search: string) => {
      console.log('Finding...', search);
      return Promise.resolve(items);
    },
    loadingHint: 'Loading...',
    onValueChange: (value: unknown) => console.log(value),
    className: 'w-64',
  },
};

export const Search: Story = {
  args: {
    disabled: false,
    shouldFilter: false,
    emptyHint: 'No results found.',
    inputPlaceholder: 'Search...',
    placeholder: 'Select your value here',
    debounceMs: 750,
    items: (search: string) => {
      console.log('Finding...', search);
      return Promise.resolve(
        items.map((group) => ({
          ...group,
          items: group.items.filter(
            (item) =>
              item.label &&
              String(item.label).toLowerCase().includes(search.toLowerCase()),
          ),
        })),
      );
    },
    loadingHint: 'Loading...',
    onValueChange: (value: unknown) => console.log(value),
    className: 'w-64',
  },
};
