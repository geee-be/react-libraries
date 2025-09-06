import {
  DrawerClose as DrawerCloseComponent,
  Drawer as DrawerComponent,
  DrawerContent as DrawerContentComponent,
  DrawerDescription as DrawerDescriptionComponent,
  DrawerFooter as DrawerFooterComponent,
  DrawerHandle as DrawerHandleComponent,
  DrawerHeader as DrawerHeaderComponent,
  DrawerOverlay as DrawerOverlayComponent,
  DrawerPortal as DrawerPortalComponent,
  DrawerTitle as DrawerTitleComponent,
  DrawerTrigger as DrawerTriggerComponent,
} from './Drawer';

type DrawerCompound = typeof DrawerComponent & {
  Root: typeof DrawerComponent;
  Close: typeof DrawerCloseComponent;
  Content: typeof DrawerContentComponent;
  Description: typeof DrawerDescriptionComponent;
  Footer: typeof DrawerFooterComponent;
  Handle: typeof DrawerHandleComponent;
  Header: typeof DrawerHeaderComponent;
  Overlay: typeof DrawerOverlayComponent;
  Portal: typeof DrawerPortalComponent;
  Title: typeof DrawerTitleComponent;
  Trigger: typeof DrawerTriggerComponent;
};

const Drawer: DrawerCompound = Object.assign(DrawerComponent, {
  Root: DrawerComponent,
  Close: DrawerCloseComponent,
  Content: DrawerContentComponent,
  Description: DrawerDescriptionComponent,
  Footer: DrawerFooterComponent,
  Handle: DrawerHandleComponent,
  Header: DrawerHeaderComponent,
  Overlay: DrawerOverlayComponent,
  Portal: DrawerPortalComponent,
  Title: DrawerTitleComponent,
  Trigger: DrawerTriggerComponent,
});

export {
  Drawer,
  DrawerCloseComponent as DrawerClose,
  DrawerContentComponent as DrawerContent,
  DrawerDescriptionComponent as DrawerDescription,
  DrawerFooterComponent as DrawerFooter,
  DrawerHandleComponent as DrawerHandle,
  DrawerHeaderComponent as DrawerHeader,
  DrawerOverlayComponent as DrawerOverlay,
  DrawerPortalComponent as DrawerPortal,
  DrawerTitleComponent as DrawerTitle,
  DrawerTriggerComponent as DrawerTrigger,
};

export type { DrawerProps } from './Drawer';
