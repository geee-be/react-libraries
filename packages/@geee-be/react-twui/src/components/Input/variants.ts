import { cva } from 'cva';
import { cn } from '../../helpers/utils.js';

export const inputVariants = cva({
  base: cn(
    'antialiased inline grow rounded-lg border px-4 py-2 text-sm leading-6 transition-colors duration-100',
    // focus
    'outline-control-focus focus:outline focus:outline-2 focus:outline-offset-2',
    // color
    'bg-control text-control-fg border-default hover:border-default/70 placeholder:text-control-fg/50',
  ),
  variants: {
    ariaInvalid: {
      true: 'border-destructive hover:border-destructive',
    },
    disabled: {
      true: 'bg-control text-control-fg/50 placeholder:text-control-fg/50 border-default/50 hover:border-default/50',
    },
  },
});
