import type { Meta, StoryObj } from '@storybook/react-vite';
import { ShortcutKey } from '../ShortcutKey/index.js';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from './index.js';

const meta = {
  component: Command,
  argTypes: {
    children: { table: { disable: true } },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <CommandInput autoFocus placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem disabled={false}>Calendar</CommandItem>
            <CommandItem disabled>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <span>Profile</span>
              <ShortcutKey>⌘P</ShortcutKey>
            </CommandItem>
            <CommandItem>Billing</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </>
    ),
    disablePointerSelection: true,
    loop: true,
  },
};
