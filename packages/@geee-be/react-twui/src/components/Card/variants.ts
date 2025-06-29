import { cva } from 'cva';

export const cardVariants = cva({
  variants: {
    variant: {
      rounded: 'rounded-xl',
      'square-top': 'rounded-t-none rounded-b-xl',
    },
    color: {
      none: 'border-paper-border text-paper-fg print:border-black/50 print:text-black',
      primary:
        'border-paper-border text-paper-fg print:border-black/50 print:text-black border-t-[6px] border-t-primary print:border-t-primary',
    },
  },
  defaultVariants: {
    variant: 'rounded',
    color: 'none',
  },
});

export const cardContentVariants = cva({
  base: 'text-start font-normal flex flex-col',
  variants: {
    gap: {
      none: 'gap-0',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
      '2xl': 'gap-12',
    },
    gutters: {
      uneven: 'mx-4 my-2 md:mx-6 md:my-4',
      normal: 'm-4 md:m-6',
      /** DEPRECATED: use `normal` */
      'collapse-none': 'm-4 md:m-6',
      'collapse-x': 'my-4 md:my-6 mx-0',
      'collapse-y': 'mx-4 md:mx-6 my-0',
      /** DEPRECATED: use `none` */
      collapse: 'm-0',
      none: 'm-0',
    },
  },
  defaultVariants: {
    gap: 'lg',
    gutters: 'normal',
  },
});

export const cardFooterVariants = cva({
  base: 'text-start border-t border-t-paper-border print:border-t-paper-black/50',
  variants: {
    gutters: {
      'collapse-none': 'p-4 md:p-6',
      'collapse-x': 'py-4 md:py-6 px-0',
      'collapse-y': 'px-4 md:px-6 py-0',
      collapse: 'p-0',
    },
  },
  defaultVariants: {
    gutters: 'collapse-none',
  },
});

export const cardHeaderVariants = cva({
  base: 'text-start font-medium border-b border-b-paper-border print:border-b-paper-black/50',
  variants: {
    gutters: {
      'collapse-none': 'p-4 md:p-6',
      'collapse-x': 'py-4 md:py-6 px-0',
      'collapse-y': 'px-4 md:px-6 py-0',
      collapse: 'p-0',
    },
    color: {
      none: '',
      primary:
        'bg-primary text-primary-fg default-primary print:bg-none print:text-primary',
      secondary:
        'bg-secondary text-secondary-fg default-secondary print:bg-none print:text-secondary',
      info: 'bg-info text-info-fg default-info print:bg-none print:text-info',
      warning:
        'bg-warning text-warning-fg default-warning print:bg-none print:text-warning',
      success:
        'bg-success text-success-fg default-success print:bg-none print:text-success',
      error:
        'bg-error text-error-fg default-error print:bg-none print:text-error',
    },
  },
  defaultVariants: {
    gutters: 'collapse-none',
    color: 'none',
  },
});
