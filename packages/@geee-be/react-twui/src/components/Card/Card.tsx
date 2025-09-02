import clsx from 'clsx';
import type { VariantProps } from 'cva';
import * as React from 'react';
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
    <section
      data-component="Card"
      ref={ref}
      className={clsx(
        cn('Card-root like-card', className),
        '[&_.Card-root]:bg-paper-nested print:bg-none',
      )}
      {...otherProps}
    >
      {children}
    </section>
  );
});

Card.displayName = 'Card';
CardRoot.displayName = 'CardRoot';
