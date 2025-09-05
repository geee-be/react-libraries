import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button/Button.js';
import { Card } from '../Card/index.js';
import { Carousel } from './index.js';

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
        <Carousel.Previous />
        <Carousel.Content>
          {Array.from({ length: 5 }).map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: index is all we have in this case
            <Carousel.Item key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <Card.Content className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </Card.Content>
                </Card>
              </div>
            </Carousel.Item>
          ))}
        </Carousel.Content>
        <Carousel.Next />
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
        <Carousel.Previous />
        <Carousel.Content>
          {Array.from({ length: 5 }).map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: index is all we have in this case
            <Carousel.Item key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Button>No {index}</Button>
              </div>
            </Carousel.Item>
          ))}
        </Carousel.Content>
        <Carousel.Next />
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
        <Carousel.Previous autoHide layout="overlaid" />
        <Carousel.Content>
          {Array.from({ length: 15 }).map((_, index) => (
            <Carousel.Item
              // biome-ignore lint/suspicious/noArrayIndexKey: index is all we have in this case
              key={index}
              className="md:basis-[28%] lg:basis-[18%]"
            >
              <div className="p-1">
                <Button variant="card" className="flex grow w-full">
                  <Card.Content>No {index}</Card.Content>
                </Button>
              </div>
            </Carousel.Item>
          ))}
        </Carousel.Content>
        <Carousel.Next autoHide layout="overlaid" />
      </>
    ),
  },
};
