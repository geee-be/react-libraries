import {
  PopoverArrow as PopoverArrowComponent,
  PopoverClose as PopoverCloseComponent,
  Popover as PopoverComponent,
  PopoverContent as PopoverContentComponent,
  PopoverTrigger as PopoverTriggerComponent,
} from './Popover';

type PopoverCompound = typeof PopoverComponent & {
  Arrow: typeof PopoverArrowComponent;
  Close: typeof PopoverCloseComponent;
  Content: typeof PopoverContentComponent;
  Trigger: typeof PopoverTriggerComponent;
};

export const Popover: PopoverCompound = Object.assign(PopoverComponent, {
  Arrow: PopoverArrowComponent,
  Close: PopoverCloseComponent,
  Content: PopoverContentComponent,
  Trigger: PopoverTriggerComponent,
});

// Export original form components for backward compatibility and flexibility
export {
  PopoverArrowComponent as PopoverArrow,
  PopoverCloseComponent as PopoverClose,
  PopoverContentComponent as PopoverContent,
  PopoverTriggerComponent as PopoverTrigger,
};
