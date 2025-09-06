import {
  DialogClose as DialogCloseComponent,
  Dialog as DialogComponent,
  DialogContent as DialogContentComponent,
  DialogDescription as DialogDescriptionComponent,
  DialogFooter as DialogFooterComponent,
  DialogHeader as DialogHeaderComponent,
  DialogOverlay as DialogOverlayComponent,
  DialogPortal as DialogPortalComponent,
  DialogTitle as DialogTitleComponent,
  DialogTrigger as DialogTriggerComponent,
} from './Dialog.js';

// Define the compound type
type DialogCompound = typeof DialogComponent & {
  Root: typeof DialogComponent;
  Close: typeof DialogCloseComponent;
  Content: typeof DialogContentComponent;
  Description: typeof DialogDescriptionComponent;
  Footer: typeof DialogFooterComponent;
  Header: typeof DialogHeaderComponent;
  Overlay: typeof DialogOverlayComponent;
  Portal: typeof DialogPortalComponent;
  Title: typeof DialogTitleComponent;
  Trigger: typeof DialogTriggerComponent;
};

// Create compound component with sub-components attached
const Dialog: DialogCompound = Object.assign(DialogComponent, {
  Root: DialogComponent,
  Close: DialogCloseComponent,
  Content: DialogContentComponent,
  Description: DialogDescriptionComponent,
  Footer: DialogFooterComponent,
  Header: DialogHeaderComponent,
  Overlay: DialogOverlayComponent,
  Portal: DialogPortalComponent,
  Title: DialogTitleComponent,
  Trigger: DialogTriggerComponent,
});

// Export individual components for backward compatibility
export {
  Dialog,
  DialogCloseComponent as DialogClose,
  DialogContentComponent as DialogContent,
  DialogDescriptionComponent as DialogDescription,
  DialogFooterComponent as DialogFooter,
  DialogHeaderComponent as DialogHeader,
  DialogOverlayComponent as DialogOverlay,
  DialogPortalComponent as DialogPortal,
  DialogTitleComponent as DialogTitle,
  DialogTriggerComponent as DialogTrigger,
};
