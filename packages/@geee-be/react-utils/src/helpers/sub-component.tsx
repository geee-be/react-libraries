import { type ComponentType, forwardRef } from 'react';

export const withSubComponents = <P extends {}, S>(
  RootComponent: ComponentType<P>,
  subComponents: S,
) =>
  Object.assign(
    forwardRef<P, P>((props, ref: any) => (
      <RootComponent {...props} ref={ref} />
    )),
    subComponents,
  );
