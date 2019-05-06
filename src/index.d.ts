import * as React from 'react';

declare module 'with-immutable-props-to-js' {
  function withImmutablePropsToJS<P>(WrappedComponent: React.ComponentType<P>): React.ComponentType<P>;

  export = withImmutablePropsToJS;
}
