import { type ComponentType, forwardRef } from 'react';

export const withSubComponents = <P extends {}, S>(
  RootComponent: ComponentType<P>,
  subComponents: S,
) =>
  Object.assign(
    forwardRef((props: P) => <RootComponent {...props} />),
    subComponents,
  );
