import {
  PopoverArrow as PopoverArrowComponent,
  PopoverClose as PopoverCloseComponent,
  Popover as PopoverComponent,
  PopoverContent as PopoverContentComponent,
  PopoverTrigger as PopoverTriggerComponent,
} from './Popover';

type PopoverCompound = typeof PopoverComponent & {
  Root: typeof PopoverComponent;
  Arrow: typeof PopoverArrowComponent;
  Close: typeof PopoverCloseComponent;
  Content: typeof PopoverContentComponent;
  Trigger: typeof PopoverTriggerComponent;
};

const Popover: PopoverCompound = Object.assign(PopoverComponent, {
  Root: PopoverComponent,
  Arrow: PopoverArrowComponent,
  Close: PopoverCloseComponent,
  Content: PopoverContentComponent,
  Trigger: PopoverTriggerComponent,
});

export {
  Popover,
  PopoverArrowComponent as PopoverArrow,
  PopoverCloseComponent as PopoverClose,
  PopoverContentComponent as PopoverContent,
  PopoverTriggerComponent as PopoverTrigger,
};
