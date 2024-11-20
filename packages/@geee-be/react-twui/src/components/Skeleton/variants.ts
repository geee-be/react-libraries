import { cva } from 'cva';

export const skeletonVariants = cva({
  base: ['animate-pulse rounded-md bg-skeleton'],
  variants: {
    shape: {
      circle: 'rounded-full aspect-square min-w-[1.5rem] min-h-[1.5rem]',
      input: 'h-[2.5rem] w-full rounded-lg',
      label: 'h-[1.5rem] w-[30%] bg-skeleton/50',
      helper: 'h-[1.5rem] w-[60%] bg-skeleton/50',
      'form-control': '',
    },
  },
});
