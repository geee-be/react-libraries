import { type ComponentType, forwardRef } from 'react';

export const withSubComponents = <P extends {}, S>(
  RootComponent: ComponentType<P>,
  subComponents: S,
) =>
  Object.assign(
    forwardRef<unknown, P>((props: unknown, ref: unknown) => (
      <RootComponent {...(props as P)} ref={ref} />
    )),
    subComponents,
  );
