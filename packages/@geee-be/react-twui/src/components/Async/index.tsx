import { type ReactNode, useEffect, useState } from 'react';

type WaitFor<T> = () => Promise<T>;

type AsyncProps<T> = {
  error?: (e: unknown) => ReactNode;
  fallback?: ReactNode;
  waitFor: WaitFor<T>;
  render?: (data: T) => ReactNode;
};

export function Async<T>({ error, fallback, waitFor, render }: AsyncProps<T>) {
  const [content, setContent] = useState<ReactNode>(null);

  useEffect(() => {
    waitFor()
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
