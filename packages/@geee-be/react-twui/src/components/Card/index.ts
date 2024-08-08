import { Card as CardComponent } from './Card.js';
import { default as CardContent } from './CardContent';
import { default as CardFooter } from './CardFooter';
import { default as CardHeader } from './CardHeader';

export type { CardProps } from './Card.js';

export const Card = Object.assign(CardComponent, {
  Content: CardContent,
  Footer: CardFooter,
  Header: CardHeader,
});
