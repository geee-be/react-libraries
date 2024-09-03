import type { HTMLAttributes } from 'react';
import { cn } from '../../helpers/utils';

const ShortcutKey = ({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'ShortcutKey',
        'ml-auto text-[0.85em] leading-[1em] tracking-widest text-paper-fg/70 bg-paper px-1.5 py-1.5 border border-paper-fg/10 rounded-md',
        className,
      )}
      {...props}
    />
  );
};

ShortcutKey.displayName = 'ShortcutKey';

export { ShortcutKey };
