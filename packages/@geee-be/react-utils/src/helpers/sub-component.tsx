import { type ComponentType, forwardRef } from 'react';

export const withSubComponents = <P extends {}, S>(
  RootComponent: ComponentType<P>,
  subComponents: S,
) => Object.assign(wrapClientComponent(RootComponent), subComponents);

const wrapClientComponent = <P extends {}>(
  WrappedComponent: ComponentType<P>,
) => forwardRef((props: P) => <WrappedComponent {...props} />);
