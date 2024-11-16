import type { FC, PropsWithChildren, ReactNode } from 'react';
import { useIsClient } from '../hooks';

interface Props extends PropsWithChildren {
  serverFallback?: ReactNode;
}

export const ClientOnly: FC<Props> = ({ children, serverFallback }) => {
  const isClient = useIsClient();
  if (isClient) return <>{serverFallback}</>;
  return <>{children}</>;
};
