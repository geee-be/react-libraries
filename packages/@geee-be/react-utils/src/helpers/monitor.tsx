'use client';

import { useRenderCount } from '@uidotdev/usehooks';
import { useEffect, type FC, type PropsWithChildren } from 'react';

type Props = PropsWithChildren<{ label: string }>;

export const Monitor: FC<Props> = ({ children, label }) => {
  useEffect(() => {
    console.log(label, 'mounted');
    return () => console.log(label, 'unmounted');
  }, [label]);

  const count = useRenderCount();
  console.log(label, 'rendered', count);

  return <>{children}</>;
};
