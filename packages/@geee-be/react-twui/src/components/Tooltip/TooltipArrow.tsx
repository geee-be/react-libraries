import { TooltipArrow as PrimitiveArrow } from '@radix-ui/react-tooltip';
import type * as React from 'react';

import { cn, isReactElement } from '../../helpers/utils.js';
import { TippyIcon } from '../icons/index.js';

const TooltipArrow = ({
  ref,
  className,
  children,
  asChild = children ? isReactElement(children) : children === undefined,
  width = 24,
  height = 8,
  ...props
}: React.ComponentPropsWithoutRef<typeof PrimitiveArrow> & {
  ref?: React.Ref<React.ComponentRef<typeof PrimitiveArrow>>;
}) => {
  return (
    <PrimitiveArrow
      ref={ref}
      asChild={asChild}
      className={cn('text-default/50', className)}
      height={height}
      viewBox="0 0 24 8"
      width={width}
      {...props}
    >
      {children ? children : <TippyIcon />}
    </PrimitiveArrow>
  );
};

TooltipArrow.displayName = PrimitiveArrow.displayName;

export default TooltipArrow;
