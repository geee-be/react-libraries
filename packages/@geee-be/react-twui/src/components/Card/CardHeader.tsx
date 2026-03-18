import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'cva';
import type * as React from 'react';
import { cn } from '../../helpers/utils.js';
import { cardHeaderVariants } from './variants.js';

export const CardHeader = ({
  ref,
  asChild,
  className,
  children,
  color,
  gutters,
  ...props
}: React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardHeaderVariants> & {
    asChild?: boolean;
  } & { ref?: React.Ref<HTMLDivElement> }) => {
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
};
