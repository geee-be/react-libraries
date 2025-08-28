import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScrollArea, ScrollBar } from './index.js';

const meta = {
  component: ScrollArea,
  argTypes: {},
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export interface Artwork {
  artist: string;
  art: string;
}

export const Default: Story = {
  args: {
    className: 'h-[200px] w-[350px] rounded-md border p-4',
    children: (
      <>
        <p>
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king's pillow, in his
          soup, even in the royal toilet. The king was furious, but he couldn't
          seem to stop Jokester. And then, one day, the people of the kingdom
          discovered that the jokes left by Jokester were so funny that they
          couldn't help but laugh. And once they started laughing, they couldn't
          stop.
        </p>
        <ScrollBar orientation="vertical" />
      </>
    ),
  },
};
