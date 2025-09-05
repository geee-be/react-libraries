export type { CardProps } from './Card.js';

import { Card as CardComponent } from './Card.js';
import { CardContent as CardContentComponent } from './CardContent';
import { CardFooter as CardFooterComponent } from './CardFooter';
import { CardHeader as CardHeaderComponent } from './CardHeader';

type CardCompound = typeof CardComponent & {
  CardContent: typeof CardContentComponent;
  CardFooter: typeof CardFooterComponent;
  CardHeader: typeof CardHeaderComponent;
};

// Attach statics to the FINAL component (after forwardRef/memo/etc)
export const Card: CardCompound = Object.assign(CardComponent, {
  CardContent: CardContentComponent,
  CardFooter: CardFooterComponent,
  CardHeader: CardHeaderComponent,
});

export {
  CardContentComponent as CardContent,
  CardFooterComponent as CardFooter,
  CardHeaderComponent as CardHeader,
};
