import {
  Carousel as CarouselComponent,
  CarouselContent as CarouselContentComponent,
  CarouselItem as CarouselItemComponent,
  CarouselNext as CarouselNextComponent,
  CarouselPrevious as CarouselPreviousComponent,
} from './Carousel.js';

type CarouselCompound = typeof CarouselComponent & {
  Root: typeof CarouselComponent;
  Content: typeof CarouselContentComponent;
  Item: typeof CarouselItemComponent;
  Next: typeof CarouselNextComponent;
  Previous: typeof CarouselPreviousComponent;
};

const Carousel: CarouselCompound = Object.assign(CarouselComponent, {
  Root: CarouselComponent,
  Content: CarouselContentComponent,
  Item: CarouselItemComponent,
  Next: CarouselNextComponent,
  Previous: CarouselPreviousComponent,
});

export {
  Carousel,
  CarouselContentComponent as CarouselContent,
  CarouselItemComponent as CarouselItem,
  CarouselNextComponent as CarouselNext,
  CarouselPreviousComponent as CarouselPrevious,
};

export type { CarouselApi } from './Carousel.js';
