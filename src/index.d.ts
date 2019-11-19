import * as React from 'react';

declare function withImmutablePropsToJS<P>(WrappedComponent: React.ComponentType<P>): React.ComponentType<P>;

export default withImmutablePropsToJS;
