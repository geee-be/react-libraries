import type { FC, PropsWithChildren, ReactNode } from 'react';
import { cn } from '../../helpers/utils';

interface Props {
  className?: string;
  'data-content'?: string;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  noWrap?: boolean;
}

export const WithIcon: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  'data-content': dataContent,
  iconBefore,
  iconAfter,
  noWrap,
}) => (
  <div
    data-content={dataContent}
    className={cn('inline align-baseline', className)}
  >
    {iconBefore && (
      <div
        className={cn(
          'inline-flex self-center align-baseline translate-y-[0.125em]',
          noWrap ? 'whitespace-nowrap' : 'whitespace-pre-wrap',
          'mr-[0.5em] w-[1em] h-[1em] [&>svg]:max-w-[1em] [&>svg]:max-h-[1em]',
        )}
      >
        {iconBefore}
      </div>
    )}
    <div
      className={cn(
        'inline-flex self-center align-baseline',
        noWrap ? 'whitespace-nowrap' : 'whitespace-pre-wrap',
      )}
    >
      {children}
    </div>
    {iconAfter && (
      <div
        className={cn(
          'inline-flex self-center align-baseline translate-y-[0.125em]',
          noWrap ? 'whitespace-nowrap' : 'whitespace-pre-wrap',
          'ml-[0.5em] w-[1em] h-[1em] [&>svg]:max-w-[1em] [&>svg]:max-h-[1em]',
        )}
      >
        {iconAfter}
      </div>
    )}
  </div>
);
