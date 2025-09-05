import {
  Tooltip as TooltipComponent,
  TooltipContent as TooltipContentComponent,
} from './Tooltip.js';

type TooltipCompound = typeof TooltipComponent & {
  Content: typeof TooltipContentComponent;
};

export const Tooltip: TooltipCompound = Object.assign(TooltipComponent, {
  Content: TooltipContentComponent,
});

// Export original form components for backward compatibility and flexibility
export { TooltipContentComponent as TooltipContent };
