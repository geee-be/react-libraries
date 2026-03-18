import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import type * as React from 'react';
import { cn } from '../../helpers/utils';

type BreadcrumbProps = React.ComponentPropsWithoutRef<'nav'> & {
  separator?: React.ReactNode;
};

const Breadcrumb = ({
  ref,
  ...props
}: BreadcrumbProps & { ref?: React.Ref<HTMLElement> }) => (
  <nav ref={ref} aria-label="breadcrumb" {...props} />
);
Breadcrumb.displayName = 'Breadcrumb';

const BreadcrumbList = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'ol'> & {
  ref?: React.Ref<HTMLOListElement>;
}) => (
  <ol
    ref={ref}
    className={cn(
      'flex flex-wrap items-center gap-1.5 break-words text-sm text-paper-fg/75 sm:gap-2.5',
      className,
    )}
    {...props}
  />
);
BreadcrumbList.displayName = 'BreadcrumbList';

const BreadcrumbItem = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & {
  ref?: React.Ref<HTMLLIElement>;
}) => (
  <li
    ref={ref}
    className={cn('inline-flex items-center gap-1.5', className)}
    {...props}
  />
);
BreadcrumbItem.displayName = 'BreadcrumbItem';

const BreadcrumbLink = ({
  ref,
  asChild,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'a'> & {
  asChild?: boolean;
} & { ref?: React.Ref<HTMLAnchorElement> }) => {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      ref={ref}
      className={cn(
        'transition-colors hover:text-paper-fg/100 [&>svg]:size-3.5 flex gap-1 items-center',
        className,
      )}
      {...props}
    />
  );
};
BreadcrumbLink.displayName = 'BreadcrumbLink';

const BreadcrumbPage = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'span'> & {
  ref?: React.Ref<HTMLSpanElement>;
}) => (
  <span
    ref={ref}
    aria-disabled="true"
    aria-current="page"
    className={cn(
      'font-medium text-paper-fg/100 [&>svg]:size-3.5 flex gap-1 items-center',
      className,
    )}
    {...props}
  />
);
BreadcrumbPage.displayName = 'BreadcrumbPage';

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn('[&>svg]:size-3.5', className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
