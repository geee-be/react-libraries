import { cva } from 'cva';

export const nextButtonVariants = cva({
  base: 'absolute z-10 shadow-none hover:shadow-none',
  variants: {
    orientation: {
      horizontal: 'outline-control-focus',
      vertical: 'outline-primary',
    },
    layout: {
      extended: 'w-8 h-8 rounded-full',
      overlayed:
        'bg-background/70 hover:!bg-background/90 border-none rounded-none',
    },
  },

  compoundVariants: [
    {
      orientation: 'horizontal',
      layout: 'extended',
      class: '-right-12 top-1/2 -translate-y-1/2',
    },
    {
      orientation: 'vertical',
      layout: 'extended',
      class: '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
    },
    {
      orientation: 'horizontal',
      layout: 'overlayed',
      class: 'right-0 top-0 bottom-0 h-full',
    },
    {
      orientation: 'vertical',
      layout: 'overlayed',
      class: 'bottom-0 left-0 right-0 w-full',
    },
  ],
  defaultVariants: {
    orientation: 'horizontal',
    layout: 'extended',
  },
});

export const previousButtonVariants = cva({
  base: 'absolute z-10 shadow-none hover:shadow-none',
  variants: {
    orientation: {
      horizontal: 'outline-control-focus',
      vertical: 'outline-primary',
    },
    layout: {
      extended: 'w-8 h-8 rounded-full',
      overlayed:
        'bg-background/70 hover:!bg-background/90 border-none rounded-none',
    },
  },

  compoundVariants: [
    {
      orientation: 'horizontal',
      layout: 'extended',
      class: '-left-12 top-1/2 -translate-y-1/2',
    },
    {
      orientation: 'vertical',
      layout: 'extended',
      class: '-top-12 left-1/2 -translate-x-1/2 rotate-90',
    },
    {
      orientation: 'horizontal',
      layout: 'overlayed',
      class: 'left-0 top-1 bottom-1',
    },
    {
      orientation: 'vertical',
      layout: 'overlayed',
      class: 'top-0 left-1 right-1',
    },
  ],
  defaultVariants: {
    orientation: 'horizontal',
    layout: 'extended',
  },
});
