export const withSubComponents = <T extends object, S>(
  RootComponent: T,
  subComponents: S,
) => Object.assign(RootComponent, subComponents);
