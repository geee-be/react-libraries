import { Tooltip as TooltipComponent } from './Tooltip.js';

// Tooltip is already compound in the source file
// Extract sub-components for individual exports
const TooltipArrowComponent = TooltipComponent.Arrow;
const TooltipContentComponent = TooltipComponent.Content;
const TooltipPortalComponent = TooltipComponent.Portal;
const TooltipProviderComponent = TooltipComponent.Provider;
const TooltipRootComponent = TooltipComponent.Root;
const TooltipTriggerComponent = TooltipComponent.Trigger;

type TooltipCompound = typeof TooltipComponent & {
  Root: typeof TooltipComponent;
  Arrow: typeof TooltipArrowComponent;
  Content: typeof TooltipContentComponent;
  Portal: typeof TooltipPortalComponent;
  Provider: typeof TooltipProviderComponent;
  Trigger: typeof TooltipTriggerComponent;
};

const Tooltip: TooltipCompound = Object.assign(TooltipComponent, {
  Root: TooltipComponent,
  Arrow: TooltipArrowComponent,
  Content: TooltipContentComponent,
  Portal: TooltipPortalComponent,
  Provider: TooltipProviderComponent,
  Trigger: TooltipTriggerComponent,
});

export {
  Tooltip,
  TooltipArrowComponent as TooltipArrow,
  TooltipContentComponent as TooltipContent,
  TooltipPortalComponent as TooltipPortal,
  TooltipProviderComponent as TooltipProvider,
  TooltipRootComponent as TooltipRoot,
  TooltipTriggerComponent as TooltipTrigger,
};
