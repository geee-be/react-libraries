import { type ComponentType, forwardRef, type Ref } from 'react';

export const withSubComponents = <P extends { ref?: Ref<P> }, S>(
  RootComponent: ComponentType<P>,
  subComponents: S,
) =>
  Object.assign(
    forwardRef<P, P>((props, ref) => <RootComponent {...props} ref={ref} />),
    subComponents,
  );
