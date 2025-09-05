import {
  ScrollArea as ScrollAreaComponent,
  ScrollBar as ScrollBarComponent,
} from './ScrollArea.js';

type ScrollAreaCompound = typeof ScrollAreaComponent & {
  Bar: typeof ScrollBarComponent;
};

export const ScrollArea: ScrollAreaCompound = Object.assign(
  ScrollAreaComponent,
  {
    Bar: ScrollBarComponent,
  },
);

// Export original form components for backward compatibility and flexibility
export { ScrollBarComponent as ScrollBar };
