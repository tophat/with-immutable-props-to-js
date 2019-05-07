import * as React from 'react';

declare module 'with-immutable-props-to-js' {
  type OriginalComponent<P, S> = React.ComponentClass<P, S> | React.FunctionComponent<P>

  function withImmutablePropsToJS<P, S>(WrappedComponent: OriginalComponent<P, S>): React.ComponentClass<P, S>;

  export = withImmutablePropsToJS;
}
