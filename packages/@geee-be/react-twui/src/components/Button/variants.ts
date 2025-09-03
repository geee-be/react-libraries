import { cva } from 'cva';

export const buttonVariants = cva({
  variants: {
    size: {
      xs: 'gap-2 px-3 py-1',
      sm: 'gap-2 px-3 py-2',
      md: 'gap-2 px-4 py-2',
    },
    shape: {
      rounded: '',
      icon: 'rounded-full',
      pill: 'rounded-full',
    },
    color: {
      default: 'focus-ring-color-primary default-gray',
      gray: 'focus-ring-color-gray default-gray',
      primary: 'focus-ring-color-primary default-primary',
      secondary: 'focus-ring-color-secondary default-secondary',
      info: 'focus-ring-color-info default-info',
      warning: 'focus-ring-color-warning default-warning',
      success: 'focus-ring-color-success default-success',
      error: 'focus-ring-color-error default-error',
      danger: 'focus-ring-color-danger default-danger',
    },
    variant: {
      solid: 'like-button',
      outline: 'like-outline-button',
      input: 'like-input',
      ghost: 'like-base-button like-button-text bg-transparent text-default',
      card: 'like-base-button like-card',
      link: 'p-0 underline underline-offset-3 focus-visible:text-primary focus-visible:font-bold',
    },

    destructive: {
      true: [],
      false: [],
    },
  },

  compoundVariants: [
    {
      size: 'xs',
      shape: 'icon',
      class: 'px-0 py-0',
    },
    {
      size: 'sm',
      shape: 'icon',
      class: 'px-1 py-1',
    },
    {
      size: 'md',
      shape: 'icon',
      class: 'px-2 py-2',
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
      xs: 'h-5 w-5',
      sm: 'h-5 w-5',
      md: 'h-6 w-6',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
