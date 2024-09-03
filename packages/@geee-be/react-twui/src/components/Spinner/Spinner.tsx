import type { VariantProps } from 'cva';
import { forwardRef, type FC } from 'react';
import { cn } from '../../helpers/utils';
import { spinnerVariants } from './variants';

export type SpinnerProps = React.ButtonHTMLAttributes<HTMLDivElement> &
  VariantProps<typeof spinnerVariants>;
export type SpinnerElement = HTMLDivElement;

export const Spinner: FC<SpinnerProps> = forwardRef<
  SpinnerElement,
  SpinnerProps
>(({ className, color, size }, ref) => (
  <div ref={ref} className={cn(spinnerVariants({ color, size }), className)} />
));
