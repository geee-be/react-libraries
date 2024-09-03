import { withSubComponents } from '@geee-be/react-utils';

import { Card as CardRoot } from './Card.js';
import { CardContent } from './CardContent';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';
export type { CardProps } from './Card.js';

export { CardContent } from './CardContent';
export { CardFooter } from './CardFooter';
export { CardHeader } from './CardHeader';

export const Card = withSubComponents(CardRoot, {
  Content: CardContent,
  Footer: CardFooter,
  Header: CardHeader,
});
