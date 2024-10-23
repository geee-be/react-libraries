import { cn } from '../../helpers/utils.js';

export const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-skeleton', className)}
      {...props}
    />
  );
};
