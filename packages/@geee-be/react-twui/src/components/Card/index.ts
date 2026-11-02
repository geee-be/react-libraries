import { Card as CardComponent } from './Card.js';
import { CardContent as CardContentComponent } from './CardContent';
import { CardFooter as CardFooterComponent } from './CardFooter';
import { CardHeader as CardHeaderComponent } from './CardHeader';

type CardCompound = typeof CardComponent & {
  Root: typeof CardComponent;
  Content: typeof CardContentComponent;
  Footer: typeof CardFooterComponent;
  Header: typeof CardHeaderComponent;
};

const Card: CardCompound = Object.assign(CardComponent, {
  Root: CardComponent,
  Content: CardContentComponent,
  Footer: CardFooterComponent,
  Header: CardHeaderComponent,
});

export {
  Card,
  CardContentComponent as CardContent,
  CardFooterComponent as CardFooter,
  CardHeaderComponent as CardHeader,
};
