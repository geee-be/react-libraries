import type { FC, PropsWithChildren, ReactNode } from 'react';
import { cn } from '../../helpers/utils';

interface Props {
  className?: string;
  'data-content'?: string;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  ellipsis?: boolean;
}

export const WithIcon: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  'data-content': dataContent,
  iconBefore,
  iconAfter,
  ellipsis,
}) => (
  <div
    data-content={dataContent}
    className={cn(
      ellipsis
        ? 'flex items-center whitespace-nowrap overflow-hidden text-ellipsis'
        : 'inline-block whitespace-pre-wrap align-baseline',
      className,
    )}
  >
    {iconBefore && (
      <div
        className={cn(
          'inline-flex self-center align-baseline',
          ellipsis ? 'whitespace-nowrap' : 'translate-y-[0.2em]',
          'mr-[0.5em] w-[1em] h-[1em] [&>svg]:max-w-[1em] [&>svg]:max-h-[1em]',
        )}
      >
        {iconBefore}
      </div>
    )}
    <div
      className={cn(
        'self-center align-baseline',
        ellipsis
          ? 'inline-block whitespace-nowrap overflow-hidden text-ellipsis'
          : 'inline whitespace-pre-wrap',
      )}
    >
      {children}
    </div>
    {iconAfter && (
      <div
        className={cn(
          'inline-flex self-center align-baseline',
          ellipsis ? 'whitespace-nowrap' : 'translate-y-[0.2em]',
          'ml-[0.5em] w-[1em] h-[1em] [&>svg]:max-w-[1em] [&>svg]:max-h-[1em]',
        )}
      >
        {iconAfter}
      </div>
    )}
  </div>
);
