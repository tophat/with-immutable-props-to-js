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

    return Wrapper
}

export default withImmutablePropsToJS
