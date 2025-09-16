import { type ReactNode, useEffect, useState } from 'react';

type AsyncProps<T> = {
  error?: (e: unknown) => ReactNode;
  fallback?: ReactNode;
  waitFor: Promise<T> | (() => Promise<T>);
  render?: (data: T) => ReactNode;
};

export function Async<T>({ error, fallback, waitFor, render }: AsyncProps<T>) {
  const [content, setContent] = useState<ReactNode>(null);

  useEffect(() => {
    const promise = typeof waitFor === 'function' ? waitFor() : waitFor;
    promise
      .then((data) => {
        // biome-ignore lint/complexity/noUselessFragments: otherwise there is a type error
        setContent(render ? render(data) : <>{data}</>);
      })
      .catch((e) => {
        setContent(error?.(e));
      });
  }, [error, waitFor, render]);

  return <>{content || fallback}</>;
}
