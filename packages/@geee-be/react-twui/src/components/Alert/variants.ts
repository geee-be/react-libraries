import { cva } from 'cva';

export const alertVariants = cva({
  variants: {
    variant: {
      inline: 'rounded-lg px-2 py-3 items-center',
      expanded: 'gap-1 rounded-r-lg border-l-2 p-4 pl-14px',
    },
    color: {
      default: 'border-default bg-default text-default-fg default-default',
      primary: 'border-primary bg-primary text-primary-fg default-primary',
      secondary:
        'border-secondary bg-secondary text-secondary-fg default-secondary',
      info: 'border-info bg-info text-info-fg default-info',
      warning: 'border-warning bg-warning text-warning-fg default-warning',
      success: 'border-success bg-success text-success-fg default-success',
      error: 'border-error bg-error text-error-fg default-error',
      danger: 'border-danger bg-danger text-danger-fg default-danger',
    },
  },
  defaultVariants: {
    variant: 'inline',
    color: 'default',
  },
  compoundVariants: [
    {
      variant: 'expanded',
      color: 'default',
      class: 'border-default bg-default-muted text-default-muted-fg',
    },
    {
      variant: 'expanded',
      color: 'primary',
      class: 'border-primary bg-primary-muted text-primary-muted-fg',
    },
    {
      variant: 'expanded',
      color: 'secondary',
      class: 'border-secondary bg-secondary-muted text-secondary-muted-fg',
    },
    {
      variant: 'expanded',
      color: 'info',
      class: 'border-info bg-info-muted text-info-muted-fg',
    },
    {
      variant: 'expanded',
      color: 'warning',
      class: 'border-warning bg-warning-muted text-warning-muted-fg',
    },
    {
      variant: 'expanded',
      color: 'error',
      class: 'border-error bg-error-muted text-error-muted-fg',
    },
    {
      variant: 'expanded',
      color: 'danger',
      class: 'border-danger bg-danger-muted text-danger-muted-fg',
    },
  ],
});
