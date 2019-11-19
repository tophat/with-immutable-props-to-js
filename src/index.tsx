/**
 * Original work Copyright (c) 2015-2018 Dan Abramov
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 *
 * Modified work Copyright 2018-present Top Hat Monocle Corp.
 *
 * https://github.com/tophat/with-immutable-props-to-js/blob/master/LICENSE
 */
import hoistNonReactStatics from 'hoist-non-react-statics'
import * as React from 'react'
import * as Immutable from 'immutable'
import './declarations'

const getDisplayName = (Component: React.ComponentType): string => {
    return Component.displayName || Component.name || 'Component'
}

const isImmutable = Immutable.isImmutable || Immutable.Iterable.isIterable

function withImmutablePropsToJS<P>(
    WrappedComponent: React.ComponentType<P>,
): React.ComponentType<P> {
    type WrapperProps = P & {
        forwardedRef?: React.Ref<React.ElementType>
    }
    const Wrapper = ({ forwardedRef, ...rest }: WrapperProps) => {
        const propsJS = Object.entries(rest).reduce(
            (newProps, [propKey, propValue]: [string, any]) => {
                const canConvertToJS =
                    isImmutable(propValue) &&
                    typeof propValue.toJS === 'function'
                newProps[propKey] = canConvertToJS
                    ? propValue.toJS()
                    : propValue
                return newProps
            },
            {} as { [index: string]: any },
        )
        return <WrappedComponent {...(propsJS as P)} ref={forwardedRef} />
    }

    const WrapperWithForwardedRef = React.forwardRef((props: P, ref) => (
        <Wrapper {...props} forwardedRef={ref} />
    ))

    WrapperWithForwardedRef.displayName = `withImmutablePropsToJS(${getDisplayName(
        WrappedComponent,
    )})`

    hoistNonReactStatics(WrapperWithForwardedRef, WrappedComponent)

    return WrapperWithForwardedRef as React.ComponentType<P>
}

export default withImmutablePropsToJS
