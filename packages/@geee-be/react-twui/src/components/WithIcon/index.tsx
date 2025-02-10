import type { FC, PropsWithChildren, ReactNode } from 'react';

interface Props {
  className?: string;
  'data-content'?: string;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
}

export const WithIcon: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  'data-content': dataContent,
  iconBefore,
  iconAfter,
}) => (
  <div
    data-content={dataContent}
    className={`inline leading-[1em] ${className ?? ''}`}
  >
    {iconBefore && (
      <div className="inline-block align-middle whitespace-pre-wrap mr-[0.5em] w-[1em] h-[1em] [&>svg]:max-w-[1em] [&>svg]:max-h-[1em]">
        {iconBefore}
      </div>
    )}
    <div className="inline align-middle whitespace-pre-wrap">{children}</div>
    {iconAfter && (
      <div className="inline-block align-middle whitespace-pre-wrap ml-[0.5em] w-[1em] h-[1em] [&>svg]:max-w-[1em] [&>svg]:max-h-[1em]">
        {iconAfter}
      </div>
    )}
  </div>
);
