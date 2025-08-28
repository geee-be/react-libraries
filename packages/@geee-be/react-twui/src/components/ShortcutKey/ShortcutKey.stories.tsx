import type { Meta } from '@storybook/react-vite';
import type { FC } from 'react';
import { ShortcutKey } from './index';

const meta = {
  component: ShortcutKey,
} satisfies Meta<typeof ShortcutKey>;

export default meta;

export const Default: FC = () => (
  <div className="text-background-fg">
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
