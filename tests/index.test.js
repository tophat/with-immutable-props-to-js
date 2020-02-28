import React from 'react'
import { mount } from 'enzyme'
import Immutable from 'immutable'

import withImmutablePropsToJS from '../src/index'

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
            obj: { deep: 'prop' },
        })
        expect(myComponent.prop('arr')).toBe(mockProps.arr)
        expect(myComponent.prop('obj')).toBe(mockProps.obj)
    })

    const isPropLeftAlone = propValue => {
        const mockProps = {
            mockProp: propValue,
        }
        const MyComponent = () => <div />
        const WrappedComponent = withImmutablePropsToJS(MyComponent)
        const wrapper = mount(<WrappedComponent {...mockProps} />)
        return wrapper.find(MyComponent).prop('mockProp') === propValue
    }

    it('leaves function props alone', () => {
        expect(isPropLeftAlone(function() {})).toBe(true)
        expect(isPropLeftAlone(() => {})).toBe(true)
    })

    it('leaves string props alone', () => {
        expect(isPropLeftAlone('my great string')).toBe(true)
        expect(isPropLeftAlone('')).toBe(true)
        expect(isPropLeftAlone('*'.repeat(1000))).toBe(true)
    })

    it('leaves number props alone', () => {
        expect(isPropLeftAlone(1337)).toBe(true)
        expect(isPropLeftAlone(0)).toBe(true)
        expect(isPropLeftAlone(1e12)).toBe(true)
        expect(isPropLeftAlone(1.25)).toBe(true)
        expect(isPropLeftAlone(-0)).toBe(true)
        expect(isPropLeftAlone(-5.222)).toBe(true)
    })

    it('leaves null props alone', () => {
        expect(isPropLeftAlone(null)).toBe(true)
    })

    it('leaves undefined props alone', () => {
        expect(isPropLeftAlone(undefined)).toBe(true)
    })

    it('leaves boolean props alone', () => {
        expect(isPropLeftAlone(true)).toBe(true)
        expect(isPropLeftAlone(false)).toBe(true)
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
            'withImmutablePropsToJS(MyComponent)',
        )
    })

    it('sets a default display name if none is set', () => {
        const WrappedComponent = withImmutablePropsToJS(() => <div />)
        expect(WrappedComponent.displayName).toBe(
            'withImmutablePropsToJS(Component)',
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
        const MyComponent = React.forwardRef((props, ref) => (
            <div ref={ref}>some content</div>
        ))
        const WithImmutable = withImmutablePropsToJS(MyComponent)
        mount(
            <div>
                <WithImmutable ref={myRef} />
            </div>,
        )
        expect(myRef.current.innerHTML).toBe('some content')
    })

    it('forwards function refs', () => {
        let element
        const myRef = ref => (element = ref)
        const MyComponent = React.forwardRef((props, ref) => (
            <div ref={ref}>some content</div>
        ))
        const WithImmutable = withImmutablePropsToJS(MyComponent)
        mount(
            <div>
                <WithImmutable ref={myRef} />
            </div>,
        )
        expect(element.innerHTML).toBe('some content')
    })
})
