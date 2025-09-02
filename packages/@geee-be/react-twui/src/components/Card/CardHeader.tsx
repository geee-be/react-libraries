import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'cva';
import * as React from 'react';
import { cn } from '../../helpers/utils.js';
import { cardHeaderVariants } from './variants.js';

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof cardHeaderVariants> & {
      asChild?: boolean;
    }
>(({ asChild, className, children, color, gutters, ...props }, ref) => {
  const Component = asChild ? Slot : 'div';

  return (
    <div
      data-component="CardHeader"
      className={cn(
        'Card-header',
        cardHeaderVariants({ color, gutters }),
        className,
      )}
    >
      <Component ref={ref} {...props}>
        {children}
      </Component>
    </div>
  );
});
