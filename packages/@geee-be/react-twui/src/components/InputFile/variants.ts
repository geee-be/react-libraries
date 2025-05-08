import { cva } from 'cva';
import { cn } from '../../helpers/utils.js';

export const borderVariants = cva({
  // base: 'w-full py-9 bg-control border border-control-border gap-3 grid border-dashed',
  base: cn(
    'antialiased flex text-center items-center justify-center grow border px-4 py-2 text-sm leading-6 transition-colors duration-100 cursor-pointer overflow-hidden',
    // focus
    'outline-control-focus focus:outline focus:outline-2 focus:outline-offset-2',
    // color
    'bg-control text-control-fg border-default border-dashed hover:border-default/70 placeholder:text-control-fg/50',
  ),
  variants: {
    shape: {
      rectangle: 'rounded-lg',
      circle: 'rounded-full aspect-square',
    },
  },
  defaultVariants: {
    shape: 'rectangle',
  },
});
