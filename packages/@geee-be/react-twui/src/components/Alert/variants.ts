import { cva } from 'cva';

export const alertVariants = cva({
  variants: {
    variant: {
      inline: 'rounded-lg px-2 py-3 items-center',
      expanded: 'gap-1 rounded-r-lg border-l-2 p-4 pl-14px',
    },
    color: {
      default:
        'border-default bg-default text-default-fg default-default',
      primary:
        'border-primary bg-primary text-primary-fg default-primary',
      secondary:
        'border-secondary bg-secondary text-secondary-fg default-secondary',
      info: 'border-info bg-info text-info-fg default-info',
      warning:
        'border-warning bg-warning text-warning-fg default-warning',
      success:
        'border-success bg-success text-success-fg default-success',
      error: 'border-error bg-error text-error-fg default-error',
      danger: 'border-danger bg-danger text-danger-fg default-danger',
    },
  },
  defaultVariants: {
    variant: 'inline',
    color: 'default',
  },
});

export const alertTitleVariants = cva({
  base: 'text-start font-bold',
  variants: {
    color: {
      default: 'text-default-fg',
      primary: 'text-primary-fg',
      secondary: 'text-secondary-fg',
      info: 'text-info-fg',
      warning: 'text-warning-fg',
      success: 'text-success-fg',
      error: 'text-error-fg',
    },
  },
  defaultVariants: {
    color: 'default',
  },
});

export const alertIconVariants = cva({
  variants: {
    color: {
      default: 'text-default-fg',
      primary: 'text-primary-fg',
      secondary: 'text-secondary-fg',
      info: 'text-info-fg',
      warning: 'text-warning-fg',
      success: 'text-success-fg',
      error: 'text-error-fg',
    },
  },
  defaultVariants: {
    color: 'default',
  },
});
