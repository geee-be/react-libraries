import type { VariantProps } from 'cva';
import { cn } from '../../helpers/utils';
import { spinnerVariants } from './variants';

export type SpinnerProps = React.ButtonHTMLAttributes<HTMLDivElement> &
  VariantProps<typeof spinnerVariants>;
export type SpinnerElement = HTMLDivElement;

export const Spinner = ({
  ref,
  className,
  color,
  size,
}: SpinnerProps & { ref?: React.Ref<SpinnerElement> }) => (
  <div ref={ref} className={cn(spinnerVariants({ color, size }), className)} />
);
