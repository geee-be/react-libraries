import {
  Collapsible as CollapsibleComponent,
  CollapsibleContent as CollapsibleContentComponent,
  CollapsibleTrigger as CollapsibleTriggerComponent,
} from './Collapsible';

type CollapsibleCompound = typeof CollapsibleComponent & {
  Content: typeof CollapsibleContentComponent;
  Trigger: typeof CollapsibleTriggerComponent;
};

export const Collapsible: CollapsibleCompound = Object.assign(
  CollapsibleComponent,
  {
    Content: CollapsibleContentComponent,
    Trigger: CollapsibleTriggerComponent,
  },
);

// Export original form components for backward compatibility and flexibility
export {
  CollapsibleContentComponent as CollapsibleContent,
  CollapsibleTriggerComponent as CollapsibleTrigger,
};
