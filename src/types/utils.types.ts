/**
 * Take a react component and return its props
 * @example
 *  type A = PropsOf<typeof MyComponent> // { isActive: boolean } (props of MyComponent)
 */
export type PropsOf<T> = T extends
  | React.ComponentType<infer P>
  | React.Component<infer P>
  ? JSX.LibraryManagedAttributes<T, P>
  : never;
