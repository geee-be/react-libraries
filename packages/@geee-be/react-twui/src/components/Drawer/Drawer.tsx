'use client';

import type { VariantProps } from 'cva';
import type * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { Style } from '../../helpers/style';
import { cn } from '../../helpers/utils';
import { contentVariants } from './variants';

export type DrawerProps = React.ComponentProps<typeof DrawerPrimitive.Root>;

const Drawer: React.FC<DrawerProps> = ({
  shouldScaleBackground = false,
  ...props
}) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);
Drawer.displayName = 'Drawer';

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> & {
  ref?: React.Ref<React.ComponentRef<typeof DrawerPrimitive.Overlay>>;
}) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn('Drawer-overlay', Style.overlay(), 'z-50', className)}
    {...props}
  />
);
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerHandle = ({
  ref,
}: React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.Ref<HTMLDivElement>;
}) => (
  <div
    ref={ref}
    className="Drawer-handle mx-auto h-2 w-[100px] rounded-full bg-gray-muted"
  />
);
DrawerHandle.displayName = 'DrawerHandle';

const DrawerContent = ({
  ref,
  className,
  children,
  from,
  inset,
  ...props
}: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> &
  VariantProps<typeof contentVariants> & {
    ref?: React.Ref<React.ComponentRef<typeof DrawerPrimitive.Content>>;
  }) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        'Drawer-content',
        contentVariants({ from, inset }),
        className,
      )}
      {...props}
    >
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
);
DrawerContent.displayName = 'DrawerContent';

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'Drawer-header',
      'grid gap-1.5 p-4 text-center sm:text-left',
      className,
    )}
    {...props}
  />
);
DrawerHeader.displayName = 'DrawerHeader';

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'Drawer-footer',
      'mt-auto flex flex-col gap-2 p-4',
      className,
    )}
    {...props}
  />
);
DrawerFooter.displayName = 'DrawerFooter';

const DrawerTitle = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title> & {
  ref?: React.Ref<React.ComponentRef<typeof DrawerPrimitive.Title>>;
}) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      'Drawer-title',
      'text-lg font-semibold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
);
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description> & {
  ref?: React.Ref<React.ComponentRef<typeof DrawerPrimitive.Description>>;
}) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn(
      'Drawer-description',
      'text-sm text-muted-foreground',
      className,
    )}
    {...props}
  />
);
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHandle,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
};
