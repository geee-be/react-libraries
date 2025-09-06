import {
  SheetClose as SheetCloseComponent,
  Sheet as SheetComponent,
  SheetContent as SheetContentComponent,
  SheetDescription as SheetDescriptionComponent,
  SheetFooter as SheetFooterComponent,
  SheetHeader as SheetHeaderComponent,
  SheetOverlay as SheetOverlayComponent,
  SheetPortal as SheetPortalComponent,
  SheetTitle as SheetTitleComponent,
  SheetTrigger as SheetTriggerComponent,
} from './Sheet.js';

// Define the compound type
type SheetCompound = typeof SheetComponent & {
  Root: typeof SheetComponent;
  Close: typeof SheetCloseComponent;
  Content: typeof SheetContentComponent;
  Description: typeof SheetDescriptionComponent;
  Footer: typeof SheetFooterComponent;
  Header: typeof SheetHeaderComponent;
  Overlay: typeof SheetOverlayComponent;
  Portal: typeof SheetPortalComponent;
  Title: typeof SheetTitleComponent;
  Trigger: typeof SheetTriggerComponent;
};

// Create compound component with sub-components attached
const Sheet: SheetCompound = Object.assign(SheetComponent, {
  Root: SheetComponent,
  Close: SheetCloseComponent,
  Content: SheetContentComponent,
  Description: SheetDescriptionComponent,
  Footer: SheetFooterComponent,
  Header: SheetHeaderComponent,
  Overlay: SheetOverlayComponent,
  Portal: SheetPortalComponent,
  Title: SheetTitleComponent,
  Trigger: SheetTriggerComponent,
});

// Export individual components for backward compatibility
export {
  Sheet,
  SheetCloseComponent as SheetClose,
  SheetContentComponent as SheetContent,
  SheetDescriptionComponent as SheetDescription,
  SheetFooterComponent as SheetFooter,
  SheetHeaderComponent as SheetHeader,
  SheetOverlayComponent as SheetOverlay,
  SheetPortalComponent as SheetPortal,
  SheetTitleComponent as SheetTitle,
  SheetTriggerComponent as SheetTrigger,
};
