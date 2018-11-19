import React from 'react'
import { mount } from 'enzyme'
import withImmutablePropsToJS from '../src/index'

import Immutable from 'immutable'

describe('withImmutablePropsToJS helper', () => {
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

    it('leaves non-immutable props alone', () => {
        const mockProps = {
            my: 'great',
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

    it('leaves function props alone too', () => {
        const mockProps = {
            fnProp() {},
        }
        const MyComponent = () => <div />
        const WrappedComponent = withImmutablePropsToJS(MyComponent)
        const wrapper = mount(<WrappedComponent {...mockProps} />)
        expect(wrapper.find(MyComponent).prop('fnProp')).toBe(mockProps.fnProp)
    })

    it('sets the display name of the wrapper component', () => {
        const MyComponent = () => <div />
        const mockDisplayName = 'MyComponent'
        MyComponent.displayName = mockDisplayName
        const WrappedComponent = withImmutablePropsToJS(MyComponent)
        expect(WrappedComponent.displayName).toBe(
            `withImmutablePropsToJS(${mockDisplayName})`,
        )
    })
})
