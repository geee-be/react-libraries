export type { CardProps } from './Card.js';

import { Card as CardComponent } from './Card.js';
import { CardContent as CardContentComponent } from './CardContent';
import { CardFooter as CardFooterComponent } from './CardFooter';
import { CardHeader as CardHeaderComponent } from './CardHeader';

type CardCompound = typeof CardComponent & {
  Content: typeof CardContentComponent;
  Footer: typeof CardFooterComponent;
  Header: typeof CardHeaderComponent;
};

export const Card: CardCompound = Object.assign(CardComponent, {
  Content: CardContentComponent,
  Footer: CardFooterComponent,
  Header: CardHeaderComponent,
});

export {
  CardContentComponent as CardContent,
  CardFooterComponent as CardFooter,
  CardHeaderComponent as CardHeader,
};
