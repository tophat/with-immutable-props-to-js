# with-immutable-props-to-js

<span><img align="right" src="./website/static/img/ml.png" alt="Logo"></span>

[![npm](https://img.shields.io/npm/v/with-immutable-props-to-js.svg)](https://www.npmjs.com/package/with-immutable-props-to-js)
[![Builds](https://img.shields.io/circleci/project/github/tophat/with-immutable-props-to-js/master.svg)](https://circleci.com/gh/tophat/with-immutable-props-to-js)
[![npm downloads](https://img.shields.io/npm/dm/with-immutable-props-to-js.svg)](https://npm-stat.com/charts.html?package=with-immutable-props-to-js)
[![codecov](https://codecov.io/gh/tophat/with-immutable-props-to-js/branch/master/graph/badge.svg)](https://codecov.io/gh/tophat/with-immutable-props-to-js)
[![Greenkeeper badge](https://badges.greenkeeper.io/tophat/with-immutable-props-to-js.svg)](https://greenkeeper.io/)

[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat)](#contributors)
[![Slack workspace](https://slackinvite.dev.tophat.com/badge.svg)](https://tophat-opensource.slack.com/)
[![Maturity badge - level 3](https://img.shields.io/badge/Maturity-Level%203%20--%20Stable-green.svg)](https://github.com/tophat/getting-started/blob/master/scorecard.md)

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

You can read about the rationale for this higher-order component [here](https://tophat.github.io/with-immutable-props-to-js/docs/motivation).

## Contributors

For information on how to contribute to this project, check out the [contributing guide](./CONTRIBUTING.md).

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/3495264?v=4" width="100px;"/><br /><sub><b>Michael Rose</b></sub>](http://msrose.github.io)<br />[💻](https://github.com/tophat/with-immutable-props-to-js/commits?author=msrose "Code") [📖](https://github.com/tophat/with-immutable-props-to-js/commits?author=msrose "Documentation") [🚇](#infra-msrose "Infrastructure (Hosting, Build-Tools, etc)") | [<img src="https://avatars1.githubusercontent.com/u/39271619?v=4" width="100px;"/><br /><sub><b>Brandon Baksh</b></sub>](https://www.linkedin.com/in/brandonbaksh/)<br />[🚇](#infra-brandonbaksh "Infrastructure (Hosting, Build-Tools, etc)") | [<img src="https://avatars3.githubusercontent.com/in/505?v=4" width="100px;"/><br /><sub><b>greenkeeper[bot]</b></sub>](https://github.com/apps/greenkeeper)<br />[🚇](#infra-greenkeeper[bot] "Infrastructure (Hosting, Build-Tools, etc)") | [<img src="https://avatars2.githubusercontent.com/u/3534236?v=4" width="100px;"/><br /><sub><b>Jake Bolam</b></sub>](https://jakebolam.com)<br />[📖](https://github.com/tophat/with-immutable-props-to-js/commits?author=jakebolam "Documentation") [🚇](#infra-jakebolam "Infrastructure (Hosting, Build-Tools, etc)") | [<img src="https://avatars0.githubusercontent.com/u/8632167?v=4" width="100px;"/><br /><sub><b>Sanchit Gera</b></sub>](http://www.sanchitgera.ca)<br />[📖](https://github.com/tophat/with-immutable-props-to-js/commits?author=sanchitgera "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/445636?v=4" width="100px;"/><br /><sub><b>Siavash Mahmoudian</b></sub>](https://breezio.com)<br />[🚇](#infra-syavash "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: | :---: | :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## Credits

Special thanks to [Carol Skelly](https://github.com/iatek) for donating the 'tophat' GitHub organization.
