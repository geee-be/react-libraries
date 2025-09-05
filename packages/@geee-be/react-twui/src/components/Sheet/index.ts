import {
  SheetClose as SheetCloseComponent,
  Sheet as SheetComponent,
  SheetContent as SheetContentComponent,
  SheetDescription as SheetDescriptionComponent,
  SheetFooter as SheetFooterComponent,
  SheetHeader as SheetHeaderComponent,
  SheetOverlay as SheetOverlayComponent,
  SheetPortal as SheetPortalComponent,
  SheetPrimitiveContent as SheetPrimitiveContentComponent,
  SheetTitle as SheetTitleComponent,
  SheetTrigger as SheetTriggerComponent,
} from './Sheet';

type SheetCompound = typeof SheetComponent & {
  Close: typeof SheetCloseComponent;
  Content: typeof SheetContentComponent;
  Description: typeof SheetDescriptionComponent;
  Footer: typeof SheetFooterComponent;
  Header: typeof SheetHeaderComponent;
  Overlay: typeof SheetOverlayComponent;
  Portal: typeof SheetPortalComponent;
  PrimitiveContent: typeof SheetPrimitiveContentComponent;
  Title: typeof SheetTitleComponent;
  Trigger: typeof SheetTriggerComponent;
};

export const Sheet: SheetCompound = Object.assign(SheetComponent, {
  Close: SheetCloseComponent,
  Content: SheetContentComponent,
  Description: SheetDescriptionComponent,
  Footer: SheetFooterComponent,
  Header: SheetHeaderComponent,
  Overlay: SheetOverlayComponent,
  Portal: SheetPortalComponent,
  PrimitiveContent: SheetPrimitiveContentComponent,
  Title: SheetTitleComponent,
  Trigger: SheetTriggerComponent,
});

// Export original form components for backward compatibility and flexibility
export {
  SheetCloseComponent as SheetClose,
  SheetContentComponent as SheetContent,
  SheetDescriptionComponent as SheetDescription,
  SheetFooterComponent as SheetFooter,
  SheetHeaderComponent as SheetHeader,
  SheetOverlayComponent as SheetOverlay,
  SheetPortalComponent as SheetPortal,
  SheetPrimitiveContentComponent as SheetPrimitiveContent,
  SheetTitleComponent as SheetTitle,
  SheetTriggerComponent as SheetTrigger,
};
