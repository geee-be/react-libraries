export type { CarouselApi } from './Carousel.js';

import {
  Carousel as CarouselComponent,
  CarouselContent as CarouselContentComponent,
  CarouselItem as CarouselItemComponent,
  CarouselNext as CarouselNextComponent,
  CarouselPrevious as CarouselPreviousComponent,
} from './Carousel.js';

type CarouselCompound = typeof CarouselComponent & {
  Content: typeof CarouselContentComponent;
  Item: typeof CarouselItemComponent;
  Next: typeof CarouselNextComponent;
  Previous: typeof CarouselPreviousComponent;
};

export const Carousel: CarouselCompound = Object.assign(CarouselComponent, {
  Content: CarouselContentComponent,
  Item: CarouselItemComponent,
  Next: CarouselNextComponent,
  Previous: CarouselPreviousComponent,
});

// Export original form components for backward compatibility and flexibility
export {
  CarouselContentComponent as CarouselContent,
  CarouselItemComponent as CarouselItem,
  CarouselNextComponent as CarouselNext,
  CarouselPreviousComponent as CarouselPrevious,
};
