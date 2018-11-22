---
id: api
title: API
---

# API

## Default Export

```
withImmutablePropsToJS(Component)
```

Wraps the provided component in another component that converts any Immutable objects (Map, List) it receives as props into plain JavaScript objects.

### Arguments

1. `Component` _(React.Component)_: The Component definition to be wrapped

### Returns

_(React.Component)_: A new React component definition that wraps the original component.
You can pass Immutable objects to this component, and treat them like regular JavaScript objects in the wrapped component.

### Examples

```javascript
import React from 'react'
import { render } from 'react-dom'
import Immutable from 'immutable'
import withImmutablePropsToJS from 'with-immutable-props-to-js'

const MyFancyList = ({ items }) => (
    <ul>
        {items.map(item => (
            <li style={{ color: item.color }}>item.name</li>
        ))}
    </ul>
)

const MyFancyListWithPropsToJS = withImmutablePropsToJS(MyFancyList)

const items = Immutable.List([
    Immutable.Map([['color', 'blue'], ['name', 'Top']]),
    Immutable.Map([['color', 'red'], ['name', 'Hat']]),
])

render(
    document.getElementById('app'),
    <MyFancyListWithPropsToJS items={items} />,
)
```
