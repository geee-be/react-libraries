import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import * as React from 'react';
import { cn } from '../../helpers/utils';
import type { ButtonProps } from '../Button';
import { buttonVariants } from '../Button/variants';

const PaginationComponent = ({
  className,
  ...props
}: React.ComponentProps<'nav'>) => (
  <nav
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
);
PaginationComponent.displayName = 'Pagination';

const PaginationContentComponent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
));
PaginationContentComponent.displayName = 'PaginationContent';

const PaginationItemComponent = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('', className)} {...props} />
));
PaginationItemComponent.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>;

const PaginationLinkComponent = ({
  className,
  isActive,
  size = 'sm',
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? 'outline' : 'ghost',
        size,
        shape: 'icon',
      }),
      'min-w-8 h-8',
      className,
    )}
    {...props}
  />
);
PaginationLinkComponent.displayName = 'PaginationLink';

const PaginationPreviousComponent = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLinkComponent>) => (
  <PaginationLinkComponent
    aria-label="Go to previous page"
    size="sm"
    className={cn('gap-1 pl-2.5', className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLinkComponent>
);
PaginationPreviousComponent.displayName = 'PaginationPrevious';

const PaginationNextComponent = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLinkComponent>) => (
  <PaginationLinkComponent
    aria-label="Go to next page"
    size="sm"
    className={cn('gap-1 pr-2.5', className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLinkComponent>
);
PaginationNextComponent.displayName = 'PaginationNext';

const PaginationEllipsisComponent = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsisComponent.displayName = 'PaginationEllipsis';

type PaginationCompound = typeof PaginationComponent & {
  Content: typeof PaginationContentComponent;
  Ellipsis: typeof PaginationEllipsisComponent;
  Item: typeof PaginationItemComponent;
  Link: typeof PaginationLinkComponent;
  Next: typeof PaginationNextComponent;
  Previous: typeof PaginationPreviousComponent;
};

export const Pagination: PaginationCompound = Object.assign(
  PaginationComponent,
  {
    Content: PaginationContentComponent,
    Ellipsis: PaginationEllipsisComponent,
    Item: PaginationItemComponent,
    Link: PaginationLinkComponent,
    Next: PaginationNextComponent,
    Previous: PaginationPreviousComponent,
  },
);

// Export original form components for backward compatibility and flexibility
export {
  PaginationContentComponent as PaginationContent,
  PaginationEllipsisComponent as PaginationEllipsis,
  PaginationItemComponent as PaginationItem,
  PaginationLinkComponent as PaginationLink,
  PaginationNextComponent as PaginationNext,
  PaginationPreviousComponent as PaginationPrevious,
};
