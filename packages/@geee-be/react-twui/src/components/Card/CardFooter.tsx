import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'cva';
import type * as React from 'react';
import { cn } from '../../helpers/utils.js';
import { cardFooterVariants } from './variants.js';

export const CardFooter = ({
  ref,
  asChild,
  className,
  children,
  gutters,
  ...props
}: React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardFooterVariants> & {
    asChild?: boolean;
  } & { ref?: React.Ref<HTMLDivElement> }) => {
  const Component = asChild ? Slot : 'div';

  return (
    <div
      data-component="CardFooter"
      className={cn('Card-footer', cardFooterVariants({ gutters }), className)}
    >
      <Component ref={ref} {...props}>
        {children}
      </Component>
    </div>
  );
};

CardFooter.displayName = 'CardFooter';
