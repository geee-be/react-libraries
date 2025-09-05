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

type DialogCompound = typeof DialogComponent & {
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

export const Dialog: DialogCompound = Object.assign(DialogComponent, {
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

// Export original form components for backward compatibility and flexibility
export {
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
