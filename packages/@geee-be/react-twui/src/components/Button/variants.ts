import { cva } from 'cva';
import { Style } from '../../helpers/style';

export const buttonVariants = cva({
  base: 'relative group inline-flex shrink-0 shadow-md select-none items-center justify-center text-sm font-semibold uppercase leading-6 transition-colors duration-100 antialiased border border-transparent focus:outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 hover:scale-[1.03] disabled:hover:scale-[1] hover:shadow-lg disabled:hover:shadow-none active:scale-[0.97] active:shadow-sm transition-all duration-200',
  variants: {
    size: {
      'xs-icon': 'gap-0 p-1',
      'sm-icon': 'gap-0 p-2',
      icon: 'h-10 w-10',
      sm: 'gap-2 px-3 py-1',
      md: 'gap-2 px-4 py-2',
    },
    shape: {
      rounded: 'rounded-lg',
      pill: 'rounded-full',
    },
    color: {
      default: 'outline-control-focus',
      gray: 'outline-gray default-gray',
      primary: 'outline-primary default-primary',
      secondary: 'outline-secondary default-secondary',
      info: 'outline-info default-info',
      warning: 'outline-warning default-warning',
      success: 'outline-success default-success',
      error: 'outline-error default-error',
      card: 'outline-control-focus ',
    },
    variant: {
      solid: '',
      outline: 'dark:shadow:none border shadow-xs [--border-width:1px]',
      input: [
        'normal-case font-normal hover:bg-control hover:scale-[1] active:scale-[1]',
        Style.inputLike({ display: 'inline-flex', focus: false }),
        'justify-start text-left font-normal',
      ],
      ghost:
        'hover:bg-accent hover:text-accent-foreground shadow-none hover:shadow-none',
      transparent: 'bg-transparent',
      link: 'p-0 underline underline-offset-3 focus-visible:text-primary focus-visible:font-bold',
    },

    destructive: {
      true: [],
      false: [],
    },
  },

  compoundVariants: [
    {
      size: ['xs-icon', 'sm-icon'],
      class: 'rounded-full',
    },
    // default
    {
      color: 'default',
      variant: 'solid',
      class:
        'bg-default text-default-fg hover:bg-default/80 disabled:hover:bg-default',
    },
    {
      color: 'default',
      variant: 'outline',
      class: 'border-default',
    },
    {
      color: 'default',
      variant: ['outline', 'transparent'],
      class: 'text-default hover:bg-default/10 dark:hover:bg-default-fg/10',
    },
    // gray
    {
      color: 'gray',
      variant: 'solid',
      class: 'bg-gray text-gray-fg hover:bg-gray/80 disabled:hover:bg-gray',
    },
    {
      color: 'gray',
      variant: 'outline',
      class: 'border-gray',
    },
    {
      color: 'gray',
      variant: ['outline', 'transparent'],
      class: 'text-gray hover:bg-gray/10 dark:hover:bg-gray-fg/10',
    },
    // primary
    {
      color: 'primary',
      variant: 'solid',
      class:
        'bg-primary text-primary-fg hover:bg-primary/80 disabled:hover:bg-primary',
    },
    {
      color: 'primary',
      variant: 'outline',
      class: 'border-primary',
    },
    {
      color: 'primary',
      variant: ['outline', 'transparent'],
      class: 'text-primary hover:bg-primary/10 dark:hover:bg-primary-fg/10',
    },
    // secondary
    {
      color: 'secondary',
      variant: 'solid',
      class:
        'bg-secondary text-secondary-fg hover:bg-secondary/80 disabled:hover:bg-secondary',
    },
    {
      color: 'secondary',
      variant: 'outline',
      class: 'border-secondary',
    },
    {
      color: 'secondary',
      variant: ['outline', 'transparent'],
      class:
        'text-secondary hover:bg-secondary/10 dark:hover:bg-secondary-fg/20',
    },
    // info
    {
      color: 'info',
      variant: 'solid',
      class: 'bg-info text-info-fg hover:bg-info/80 disabled:hover:bg-info',
    },
    {
      color: 'info',
      variant: 'outline',
      class: 'border-info',
    },
    {
      color: 'info',
      variant: ['outline', 'transparent'],
      class: 'text-info hover:bg-info/10 dark:hover:bg-info-fg/20',
    },
    // warning
    {
      color: 'warning',
      variant: 'solid',
      class:
        'bg-warning text-warning-fg hover:bg-warning/80 disabled:hover:bg-warning',
    },
    {
      color: 'warning',
      variant: 'outline',
      class: 'border-warning',
    },
    {
      color: 'warning',
      variant: ['outline', 'transparent'],
      class: 'text-warning hover:bg-warning/10 dark:hover:bg-warning-fg/20',
    },
    // success
    {
      color: 'success',
      variant: 'solid',
      class:
        'bg-success text-success-fg hover:bg-success/80 disabled:hover:bg-success',
    },
    {
      color: 'success',
      variant: 'outline',
      class: 'border-success',
    },
    {
      color: 'success',
      variant: ['outline', 'transparent'],
      class: 'text-success hover:bg-success/10 dark:hover:bg-success-fg/20',
    },
    // error
    {
      color: 'error',
      variant: 'solid',
      class: 'bg-error text-error-fg hover:bg-error/80 disabled:hover:bg-error',
    },
    {
      color: 'error',
      variant: 'outline',
      class: 'border-error',
    },
    {
      color: 'error',
      variant: ['outline', 'transparent'],
      class: 'text-error hover:bg-error/10 dark:hover:bg-error-fg/20',
    },
    // card
    {
      color: 'card',
      variant: 'solid',
      class: [
        'bg-paper text-paper-fg border border-paper-border grow normal-case font-inherit rounded-xl',
        'shadow-none hover:shadow-none!',
        'justify-stretch items-start p-0',
        'hover:bg-paper/80 disabled:hover:bg-paper hover:scale-[1] active:scale-[0.97]',
      ],
    },
    // transparent
    {
      variant: ['transparent'],
      class: 'shadow-none',
    },
    // link
    {
      variant: 'link',
      class: 'shadow-none hover:shadow-none',
    },
  ],
  defaultVariants: {
    shape: 'rounded',
    size: 'md',
    color: 'default',
    variant: 'solid',
  },
});

export const iconVariants = cva({
  base: 'text-current',
  variants: {
    destructive: {
      true: 'text-current',
    },
    size: {
      'xs-icon': 'h-5 w-5',
      'sm-icon': 'h-5 w-5',
      icon: 'h-6 w-6',
      sm: 'h-5 w-5',
      md: 'h-6 w-6',
    },
  },
  compoundVariants: [
    {
      // class: 'opacity-90',
    },
  ],
  defaultVariants: {
    size: 'md',
  },
});
