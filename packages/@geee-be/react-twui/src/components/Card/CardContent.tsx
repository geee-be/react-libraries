import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'cva';
import * as React from 'react';
import { cn } from '../../helpers/utils.js';
import { cardContentVariants } from './variants.js';

/* Content */
export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof cardContentVariants> & {
      asChild?: boolean;
    }
>(({ asChild, className, children, gap, gutters, ...props }, ref) => {
  const Component = asChild ? Slot : 'div';

  return (
    <div data-component="CardContent" className={className}>
      <Component
        ref={ref}
        className={cn('Card-content', cardContentVariants({ gap, gutters }))}
        {...props}
      >
        {children}
      </Component>
    </div>
  );
});

CardContent.displayName = 'CardContent';
