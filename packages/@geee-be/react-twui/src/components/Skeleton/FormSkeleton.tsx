import type { FC } from 'react';
import { Skeleton } from './Skeleton';

type Props = { fields?: number };

export const FormSkeleton: FC<Props> = ({ fields = 1 }) => {
  const array = Array.from({ length: fields }).map((_, i) => i);
  return array.map((i) => (
    <div key={`skeleton-${i}`} className="space-y-1">
      <Skeleton shape="form-control">
        <Skeleton shape="input" />
      </Skeleton>
    </div>
  ));
};
