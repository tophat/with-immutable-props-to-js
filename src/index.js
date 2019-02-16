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
import React from 'react'
import { Iterable } from 'immutable'

const getDisplayName = Component => {
    return Component.displayName || Component.name || 'Component'
}

const withImmutablePropsToJS = WrappedComponent => {
    const Wrapper = props => {
        const propsJS = Object.entries(props).reduce(
            (newProps, [propKey, propValue]) => {
                const canConvertToJS =
                    Iterable.isIterable(propValue) &&
                    typeof propValue.toJS === 'function'
                newProps[propKey] = canConvertToJS
                    ? propValue.toJS()
                    : propValue
                return newProps
            },
            {},
        )
        return <WrappedComponent {...propsJS} />
    }

    Wrapper.displayName = `withImmutablePropsToJS(${getDisplayName(
        WrappedComponent,
    )})`

    return hoistNonReactStatics(Wrapper, WrappedComponent)
}

export default withImmutablePropsToJS
