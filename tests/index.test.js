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
        expect(wrapper.find(MyComponent).props()).toEqual({ mockMap, mockList })
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
        expect(myComponent.props()).toEqual(mockProps)
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
        expect(wrapper.find(MyComponent).prop('mockProps')).toBe(
            mockProps.mockProps,
        )
    }

    it('leaves function props alone', () => {
        expectPropToBeLeftAlone(function() {})
        expectPropToBeLeftAlone(() => {})
    })

    it('leaves string props alone', () => {
        expectPropToBeLeftAlone('my great string')
        expectPropToBeLeftAlone('')
    })

    it('leaves number props alone', () => {
        expectPropToBeLeftAlone(1337)
        expectPropToBeLeftAlone(0)
        expectPropToBeLeftAlone(1e12)
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
})
