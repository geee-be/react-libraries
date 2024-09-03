import { cva } from 'cva';

export const spinnerVariants = cva({
  base: 'rounded-full animate-spin',
  variants: {
    size: {
      sm: 'w-4 h-4 border-2 border-r-2',
      md: 'w-9 h-9 border-[3px] border-r-[3px]',
      lg: 'w-16 h-16 border-[5px] border-r-[5px]',
    },
    color: {
      default: 'border-default/25 border-r-default',
      foreground: 'border-default-fg/25 border-r-default-fg',
      gray: 'border-gray/25 border-r-gray',
      primary: 'border-primary/25 border-r-primary',
      secondary: 'border-secondary/25 border-r-secondary',
      info: 'border-info/25 border-r-info',
      warning: 'border-warning/25 border-r-warning',
      success: 'border-success/25 border-r-success',
      error: 'border-error/25 border-r-error',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'default',
  },
});
