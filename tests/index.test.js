import React from 'react'
import { mount } from 'enzyme'
import withImmutablePropsToJS from '../src/index'

import Immutable from 'immutable'

describe('withImmutablePropsToJS', () => {
    it('converts immutable objects to plain objects', () => {
        const mockMap = { test: 'value' }
        const mockList = ['a', 'b', 'c']
        const immutableMap = new Immutable.Map(mockMap)
        const immutableList = new Immutable.List(mockList)
        const mockProps = {
            mockMap: immutableMap,
            mockList: immutableList,
        }
        const MyComponent = () => <div />
        const WrappedComponent = withImmutablePropsToJS(MyComponent)
        const wrapper = mount(<WrappedComponent {...mockProps} />)
        expect(wrapper.find(MyComponent).props()).toEqual({
            mockMap,
            forwardedRef: null,
            mockList,
        })
    })

    it('leaves non-immutable object props alone', () => {
        const mockProps = {
            arr: [1, 2, 3],
            obj: { deep: 'prop' },
        }
        const MyComponent = () => <div />
        const WrappedComponent = withImmutablePropsToJS(MyComponent)
        const wrapper = mount(<WrappedComponent {...mockProps} />)
        const myComponent = wrapper.find(MyComponent)
        expect(myComponent.props()).toEqual({
            arr: [1, 2, 3],
            forwardedRef: null,
            obj: { deep: 'prop' },
        })
        expect(myComponent.prop('arr')).toBe(mockProps.arr)
        expect(myComponent.prop('obj')).toBe(mockProps.obj)
    })

    const expectPropToBeLeftAlone = propValue => {
        const mockProps = {
            mockProp: propValue,
        }
        const MyComponent = () => <div />
        const WrappedComponent = withImmutablePropsToJS(MyComponent)
        const wrapper = mount(<WrappedComponent {...mockProps} />)
        expect(wrapper.find(MyComponent).prop('mockProp')).toBe(propValue)
    }

    it('leaves function props alone', () => {
        expectPropToBeLeftAlone(function() {})
        expectPropToBeLeftAlone(() => {})
    })

    it('leaves string props alone', () => {
        expectPropToBeLeftAlone('my great string')
        expectPropToBeLeftAlone('')
        expectPropToBeLeftAlone('*'.repeat(1000))
    })

    it('leaves number props alone', () => {
        expectPropToBeLeftAlone(1337)
        expectPropToBeLeftAlone(0)
        expectPropToBeLeftAlone(1e12)
        expectPropToBeLeftAlone(1.25)
        expectPropToBeLeftAlone(-0)
        expectPropToBeLeftAlone(-5.222)
    })

    it('leaves null props alone', () => {
        expectPropToBeLeftAlone(null)
    })

    it('leaves undefined props alone', () => {
        expectPropToBeLeftAlone(undefined)
    })

    it('leaves boolean props alone', () => {
        expectPropToBeLeftAlone(true)
        expectPropToBeLeftAlone(false)
    })

    it('sets the display name of the wrapper component', () => {
        const MyComponent = () => <div />
        const mockDisplayName = 'MyComponentDisplayName'
        MyComponent.displayName = mockDisplayName
        const WrappedComponent = withImmutablePropsToJS(MyComponent)
        expect(WrappedComponent.displayName).toBe(
            `withImmutablePropsToJS(${mockDisplayName})`,
        )
    })

    it('sets the display name using the constructor name if the displayName is not set', () => {
        const MyComponent = () => <div />
        const WrappedComponent = withImmutablePropsToJS(MyComponent)
        expect(WrappedComponent.displayName).toBe(
            `withImmutablePropsToJS(MyComponent)`,
        )
    })

    it('sets a default display name if none is set', () => {
        const WrappedComponent = withImmutablePropsToJS(() => <div />)
        expect(WrappedComponent.displayName).toBe(
            `withImmutablePropsToJS(Component)`,
        )
    })

    it('preserves custom static methods', () => {
        const MyComponent = () => <div />
        MyComponent.preload = () => {}
        const WrappedComponent = withImmutablePropsToJS(MyComponent)
        expect(WrappedComponent.preload).not.toBeUndefined()
    })

    it('forwards ref', () => {
        const myRef = React.createRef()
        const MyComponent = React.forwardRef((props, ref) => <div ref={ref} />)
        const WithImmutable = withImmutablePropsToJS(MyComponent)
        mount(
            <div>
                <WithImmutable ref={myRef} />
            </div>,
        )
        expect(myRef.current).toBeTruthy()
    })
})
