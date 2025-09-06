import {
  Collapsible as CollapsibleComponent,
  CollapsibleContent as CollapsibleContentComponent,
  CollapsibleTrigger as CollapsibleTriggerComponent,
} from './Collapsible';

type CollapsibleCompound = typeof CollapsibleComponent & {
  Root: typeof CollapsibleComponent;
  Content: typeof CollapsibleContentComponent;
  Trigger: typeof CollapsibleTriggerComponent;
};

const Collapsible: CollapsibleCompound = Object.assign(CollapsibleComponent, {
  Root: CollapsibleComponent,
  Content: CollapsibleContentComponent,
  Trigger: CollapsibleTriggerComponent,
});

export {
  Collapsible,
  CollapsibleContentComponent as CollapsibleContent,
  CollapsibleTriggerComponent as CollapsibleTrigger,
};
