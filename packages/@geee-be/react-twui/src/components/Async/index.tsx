import { useEffect, useState, type FC, type ReactNode } from 'react';

export const Async: FC<{
  error?: (e: unknown) => ReactNode;
  fallback?: ReactNode;
  waitFor: () => Promise<ReactNode>;
}> = ({ error, fallback, waitFor }) => {
  const [content, setContent] = useState<ReactNode>(null);

  useEffect(() => {
    waitFor()
      .then(setContent)
      .catch((e) => {
        setContent(error?.(e));
      });
  }, [error, waitFor]);

  return <>{content || fallback}</>;
};
