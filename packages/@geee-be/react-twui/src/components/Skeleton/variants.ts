import { cva } from 'cva';

export const skeletonVariants = cva({
  base: ['animate-pulse rounded-md bg-skeleton'],
  variants: {
    shape: {
      circle: 'rounded-full aspect-square min-w-6 min-h-6',
      input: 'h-10 w-full rounded-lg',
      label: 'h-6 w-[30%] bg-skeleton/50',
      helper: 'h-6 w-[60%] bg-skeleton/50',
      'form-control': '',
      'form-control-no-helper': '',
    },
  },
});
