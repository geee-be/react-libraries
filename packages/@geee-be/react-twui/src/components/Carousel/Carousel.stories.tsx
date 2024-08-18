import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button/Button.js';
import { Card } from '../Card/Card.js';
import { CardContent } from '../Card/CardContent.js';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './index.js';

const meta = {
  component: Carousel,
  decorators: (Story, ctx) => {
    return (
      <div className="my-16 mx-16 max-w-[500px]">
        <Story args={{ ...ctx.args }} />
      </div>
    );
  },
  argTypes: {},
} as Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    opts: {
      align: 'start',
    },
    children: (
      <>
        <CarouselPrevious />
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: index is all we have in this case
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </>
    ),
  },
};

export const AlignedCenter: Story = {
  args: {
    ...Default.args,
    opts: {
      align: 'center',
    },
  },
};

export const Buttons: Story = {
  args: {
    ...Default.args,
    opts: {
      align: 'center',
    },
    children: (
      <>
        <CarouselPrevious />
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: index is all we have in this case
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Button>No {index}</Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </>
    ),
  },
};

export const CardButtons: Story = {
  args: {
    ...Default.args,
    opts: {
      align: 'center',
    },
    children: (
      <>
        <CarouselPrevious autoHide layout="overlayed" />
        <CarouselContent>
          {Array.from({ length: 15 }).map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: index is all we have in this case
            <CarouselItem key={index} className="md:basis-[28%] lg:basis-[18%]">
              <div className="p-1">
                <Button color="card" className="flex grow w-full">
                  <CardContent>No {index}</CardContent>
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext autoHide layout="overlayed" />
      </>
    ),
  },
};
