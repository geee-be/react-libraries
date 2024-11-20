import type { VariantProps } from 'cva';
import type { HTMLAttributes } from 'react';
import { cn } from '../../helpers/utils.js';
import { skeletonVariants } from './variants.js';

type Props = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof skeletonVariants>;

export const Skeleton = ({ children, className, shape, ...props }: Props) => {
  if (shape === 'form-control') {
    return (
      <div className={cn('flex flex-col gap-1', className)} {...props}>
        <div className={cn(skeletonVariants({ shape: 'label' }))} />
        {children}
        <div className={cn(skeletonVariants({ shape: 'helper' }))} />
      </div>
    );
  }

  return (
    <div className={cn(skeletonVariants({ shape }), className)} {...props}>
      {children}
    </div>
  );
};
