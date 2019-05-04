declare module 'with-immutable-props-to-js' {
  import * as React from 'react';

  function withImmutablePropsToJS<P>(WrappedComponent: React.ComponentType<P>): React.ComponentType<P>;

  export = withImmutablePropsToJS
}
