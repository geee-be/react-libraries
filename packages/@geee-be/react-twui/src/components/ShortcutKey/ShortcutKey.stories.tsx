import type { Meta } from '@storybook/react';
import type { FC } from 'react';
import { ShortcutKey } from './index';

const meta = {
  component: ShortcutKey,
} satisfies Meta<typeof ShortcutKey>;

export default meta;

export const Default: FC = () => (
  <div>
    <div>
      Please don't press <ShortcutKey>⌘C</ShortcutKey> right now.
    </div>
    <div>
      Please don't press <ShortcutKey>⌘C</ShortcutKey> right now.
    </div>
    <div>
      Please don't press <ShortcutKey>⌘C</ShortcutKey> right now.
    </div>
  </div>
);
