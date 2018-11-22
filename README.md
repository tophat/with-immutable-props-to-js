# with-immutable-props-to-js

[![npm](https://img.shields.io/npm/v/with-immutable-props-to-js.svg)](https://www.npmjs.com/package/with-immutable-props-to-js)
[![Builds](https://img.shields.io/circleci/project/github/tophat/with-immutable-props-to-js/master.svg)](https://circleci.com/gh/tophat/with-immutable-props-to-js)
[![npm](https://img.shields.io/npm/dm/with-immutable-props-to-js.svg)](https://npm-stat.com/charts.html?package=with-immutable-props-to-js)
[![codecov](https://codecov.io/gh/tophat/with-immutable-props-to-js/branch/master/graph/badge.svg)](https://codecov.io/gh/tophat/with-immutable-props-to-js)
[![Greenkeeper badge](https://badges.greenkeeper.io/tophat/with-immutable-props-to-js.svg)](https://greenkeeper.io/)
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat)](#contributors)
[![Slack workspace](https://slackinvite.dev.tophat.com/badge.svg)](https://tophat-opensource.slack.com/)

A higher-order component for keeping Immutable objects outside your presentational components

## Installation

```
yarn add with-immutable-props-to-js
```

or

```
npm install with-immutable-props-to-js
```

This library also lists `react`, `react-dom`, and `immutable` as peer dependencies, so make sure they are installed in your project as well.

## Usage

```javascript
import withImmutablePropsToJS from 'with-immutable-props-to-js'
```

If you're not using ECMAScript modules:

```javascript
const withImmutablePropsToJS = require('with-immutable-props-to-js').default
```

Example:

```javascript
import React from 'react'
import { connect } from 'react-redux'
import withImmutablePropsToJS from 'with-immutable-props-to-js'

const MyDumbComponent = props => {
   // ...
   // props.objectProp is turned into a plain JavaScript object
   // props.arrayProp is turn into a plain JavaScript array
}

MyDumbComponent.propTypes = {
   objectProp: PropTypes.object,
   arrayProp: PropTypes.array,
}

const mapStateToProps = state => ({
   objectProp: mySelectorThatReturnsImmutableMap(state),
   arrayProp: mySelectorThatReturnsImmutableList(state),
})

export default connect(mapStateToProps)(withImmutablePropsToJS(MyDumbComponent))
```

## Motivation

The need for this higher-order component stems from the simultaneous use of several common libraries/patterns in React applications:

- [Redux](https://redux.js.org/) is a great way to manage application state.
- [Selectors](https://redux.js.org/introduction/learningresources#selectors) are a great way to encapsulate state access.
- [Immutable.js](https://facebook.github.io/immutable-js/) is a great way to make immutable updates in your [reducers](https://redux.js.org/basics/reducers).

When using these technologies together, there are some important rules of thumb you should follow:

- **Don't us Immutable.js in your presentational (dumb) components**: this makes your components more reusable, as their interfaces don't mandate the use of Immutable.js
- **Don't call .toJS() on Immutable objects in selectors**: .toJS() will return a brand new object every time, and cause your React components to re-render even if your app state doesn't change; return Immutable objects from all your (non-primitive type) selectors for consistency
- **Don't call .toJS() on Immutable objects in mapStateToProps**: for the same reason as above, doing this causes unnecessary re-renders

At this point, the keen observer will have realized: _there's no way left to get data from selectors into my presentational components_.

Solution: use `with-immutable-props-to-js`. The higher order component takes its props, calls .toJS() on any Immutable objects, and passes all props (along with the converted props) to the wrapped component.

- Your dumb components remain portable.
- All calls to .toJS() are isolated within the higher-order component.
- The higher-order component controls re-rendering, so it only rerenders the wrapped dumb component when `connect` determines that the Immutable values from the selectors have changed.

Thanks to the excellent Redux documentation for all the info.
You can read more about using Immutable.js with Redux on this page: https://redux.js.org/recipes/usingimmutablejs.
The code for this higher-order component is based on [this example](https://redux.js.org/recipes/usingimmutablejs#use-a-higher-order-component-to-convert-your-smart-components-immutable-js-props-to-your-dumb-components-javascript-props) in the Redux docs.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/3495264?v=4" width="100px;"/><br /><sub><b>Michael Rose</b></sub>](http://msrose.github.io)<br />[💻](https://github.com/tophat/with-immutable-props-to-js/commits?author=msrose "Code") [📖](https://github.com/tophat/with-immutable-props-to-js/commits?author=msrose "Documentation") [🚇](#infra-msrose "Infrastructure (Hosting, Build-Tools, etc)") | [<img src="https://avatars1.githubusercontent.com/u/39271619?v=4" width="100px;"/><br /><sub><b>Brandon Baksh</b></sub>](https://www.linkedin.com/in/brandonbaksh/)<br />[🚇](#infra-brandonbaksh "Infrastructure (Hosting, Build-Tools, etc)") | [<img src="https://avatars3.githubusercontent.com/in/505?v=4" width="100px;"/><br /><sub><b>greenkeeper[bot]</b></sub>](https://github.com/apps/greenkeeper)<br />[🚇](#infra-greenkeeper[bot] "Infrastructure (Hosting, Build-Tools, etc)") | [<img src="https://avatars2.githubusercontent.com/u/3534236?v=4" width="100px;"/><br /><sub><b>Jake Bolam</b></sub>](https://jakebolam.com)<br />[📖](https://github.com/tophat/with-immutable-props-to-js/commits?author=jakebolam "Documentation") [🚇](#infra-jakebolam "Infrastructure (Hosting, Build-Tools, etc)") | [<img src="https://avatars0.githubusercontent.com/u/8632167?v=4" width="100px;"/><br /><sub><b>Sanchit Gera</b></sub>](http://www.sanchitgera.ca)<br />[📖](https://github.com/tophat/with-immutable-props-to-js/commits?author=sanchitgera "Documentation") |
| :---: | :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## Credits

Special thanks to [Carol Skelly](https://github.com/iatek) for donating the 'tophat' GitHub organization.
