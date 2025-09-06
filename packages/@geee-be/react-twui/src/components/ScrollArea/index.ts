import {
  ScrollArea as ScrollAreaComponent,
  ScrollBar as ScrollBarComponent,
} from './ScrollArea.js';

type ScrollAreaCompound = typeof ScrollAreaComponent & {
  Root: typeof ScrollAreaComponent;
  Bar: typeof ScrollBarComponent;
};

const ScrollArea: ScrollAreaCompound = Object.assign(ScrollAreaComponent, {
  Root: ScrollAreaComponent,
  Bar: ScrollBarComponent,
});

export { ScrollArea, ScrollBarComponent as ScrollBar };
