import { type ComponentType, forwardRef } from 'react';

export const withSubComponents = <P extends {}, S>(
  RootComponent: ComponentType<P>,
  subComponents: S,
) =>
  Object.assign(
    forwardRef<unknown, P>((props: any, ref: any) => (
      <RootComponent {...props} ref={ref} />
    )),
    subComponents,
  );
