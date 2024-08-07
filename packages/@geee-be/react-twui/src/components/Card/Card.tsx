import type { VariantProps } from 'cva';
import * as React from 'react';

import clsx from 'clsx';
import { cn } from '../../helpers/utils.js';
import { cardVariants } from './variants.js';

export type CardProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> &
  VariantProps<typeof cardVariants>;

/* ------------------------------- Components ------------------------------- */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, color, variant = 'rounded', children, ...otherProps }, ref) => {
    return (
      <CardRoot
        ref={ref}
        className={cn(cardVariants({ variant, color }), className)}
        {...otherProps}
      >
        {children}
      </CardRoot>
    );
  },
);

/* Root */
const CardRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...otherProps }, ref) => {
  return (
    <div
      data-component="Card"
      ref={ref}
      className={clsx(
        cn(
          'Card-root bg-paper rounded-xl text-paper-fg border border-primary overflow-clip',
          className,
        ),
        '[&_.Card-root]:bg-paper-nested',
      )}
      role="region"
      {...otherProps}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';
CardRoot.displayName = 'CardRoot';
