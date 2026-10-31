'use client';

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import type * as React from 'react';

// Own wrapper: compound sub-components are attached to this function, so it must not be
// the shared Radix Root itself (which Dialog and Sheet would otherwise both mutate).
const Collapsible = (
  props: React.ComponentProps<typeof CollapsiblePrimitive.Root>,
) => <CollapsiblePrimitive.Root {...props} />;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
