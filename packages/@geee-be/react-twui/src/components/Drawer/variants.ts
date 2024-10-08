import { cva } from 'cva';

export const contentVariants = cva({
  base: 'fixed z-50 flex flex-col border-paper-border bg-paper text-paper-fg',
  variants: {
    from: {
      bottom:
        'bottom-0 inset-x-0 h-auto border-x border-t rounded-t-2xl [&_.Drawer-handle]:mt-4',
      top: 'top-0 inset-x-0 h-auto border-x border-b rounded-b-2xl [&_.Drawer-handle]:mb-4',
      left: 'left-0 inset-y-0 w-auto border-y border-r rounded-r-2xl',
      right: 'right-0 inset-y-0 w-auto border-y border-l rounded-l-2xl',
    },
    inset: {
      none: '',
      sm: 'left-2 inset-y-2 rounded-2xl [&[vaul-drawer]::after]:bg-transparent',
      md: 'left-4 inset-y-4 rounded-2xl [&[vaul-drawer]::after]:bg-transparent',
    },
  },
  defaultVariants: {
    from: 'bottom',
    inset: 'none',
  },
});
