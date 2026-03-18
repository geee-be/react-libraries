import clsx from 'clsx';
import type { VariantProps } from 'cva';
import type * as React from 'react';
import { cn } from '../../helpers/utils.js';
import { cardVariants } from './variants.js';

type CardProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> &
  VariantProps<typeof cardVariants>;

/* ------------------------------- Components ------------------------------- */
export const Card = ({
  ref,
  className,
  color,
  variant = 'rounded',
  children,
  ...otherProps
}: CardProps & { ref?: React.Ref<HTMLDivElement> }) => {
  return (
    <CardRoot
      ref={ref}
      className={cn(cardVariants({ variant, color }), className)}
      {...otherProps}
    >
      {children}
    </CardRoot>
  );
};

/* Root */
const CardRoot = ({
  ref,
  className,
  children,
  ...otherProps
}: React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.Ref<HTMLDivElement>;
}) => {
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
};

Card.displayName = 'Card';
CardRoot.displayName = 'CardRoot';
