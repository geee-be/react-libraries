'use client';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import type * as React from 'react';
import { cn } from '../../helpers/utils';

const ScrollArea = ({
  ref,
  asChild,
  className,
  children,
  viewportClassName,
  ...props
}: React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
  viewportClassName?: string;
} & {
  ref?: React.Ref<React.ComponentRef<typeof ScrollAreaPrimitive.Root>>;
}) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn('relative overflow-hidden', className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport
      asChild={asChild}
      className={cn('h-full w-full rounded-[inherit]', viewportClassName)}
    >
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
);
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = ({
  ref,
  className,
  thumbClassName,
  orientation = 'vertical',
  ...props
}: React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.ScrollAreaScrollbar
> & { thumbClassName?: string } & {
  ref?: React.Ref<
    React.ComponentRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
  >;
}) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      'flex touch-none select-none transition-colors',
      orientation === 'vertical' &&
        'h-full w-3 border-l border-l-transparent p-px',
      orientation === 'horizontal' &&
        'h-3 flex-col border-t border-t-transparent p-px',
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb
      className={cn(
        'relative flex-1 rounded-full bg-default-muted',
        thumbClassName,
      )}
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
);
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
