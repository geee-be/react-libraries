import { useEffect, useState, type ReactNode } from 'react';

type AsyncProps<T> = {
  error?: (e: unknown) => ReactNode;
  fallback?: ReactNode;
  waitFor: () => Promise<T>;
  render?: (data: T) => ReactNode;
};

export function Async<T>({ error, fallback, waitFor, render }: AsyncProps<T>) {
  const [content, setContent] = useState<ReactNode>(null);

  useEffect(() => {
    waitFor()
      .then((data) => {
        setContent(render ? render(data) : <>{data}</>);
      })
      .catch((e) => {
        setContent(error?.(e));
      });
  }, [error, waitFor, render]);

  return <>{content || fallback}</>;
}
