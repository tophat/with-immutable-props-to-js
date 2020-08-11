# with-immutable-props-to-js

<span><img align="right" src="./website/static/img/ml.png" alt="Logo"></span>

[![npm](https://img.shields.io/npm/v/with-immutable-props-to-js.svg)](https://www.npmjs.com/package/with-immutable-props-to-js)
[![Builds](https://img.shields.io/circleci/project/github/tophat/with-immutable-props-to-js/master.svg)](https://circleci.com/gh/tophat/with-immutable-props-to-js)
[![npm downloads](https://img.shields.io/npm/dm/with-immutable-props-to-js.svg)](https://npm-stat.com/charts.html?package=with-immutable-props-to-js)
[![codecov](https://codecov.io/gh/tophat/with-immutable-props-to-js/branch/master/graph/badge.svg)](https://codecov.io/gh/tophat/with-immutable-props-to-js)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=tophat/with-immutable-props-to-js)](https://dependabot.com)

[![All Contributors](https://img.shields.io/badge/all_contributors-13-orange.svg?style=flat)](#contributors)
[![Slack workspace](https://slackinvite.dev.tophat.com/badge.svg)](https://opensource.tophat.com/slack)
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
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://msrose.github.io"><img src="https://avatars3.githubusercontent.com/u/3495264?v=4" width="100px;" alt=""/><br /><sub><b>Michael Rose</b></sub></a><br /><a href="https://github.com/tophat/with-immutable-props-to-js/commits?author=msrose" title="Code">💻</a> <a href="https://github.com/tophat/with-immutable-props-to-js/commits?author=msrose" title="Documentation">📖</a> <a href="#infra-msrose" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/brandonbaksh/"><img src="https://avatars1.githubusercontent.com/u/39271619?v=4" width="100px;" alt=""/><br /><sub><b>Brandon Baksh</b></sub></a><br /><a href="#infra-brandonbaksh" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://github.com/apps/greenkeeper"><img src="https://avatars3.githubusercontent.com/in/505?v=4" width="100px;" alt=""/><br /><sub><b>greenkeeper[bot]</b></sub></a><br /><a href="#infra-greenkeeper[bot]" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://jakebolam.com"><img src="https://avatars2.githubusercontent.com/u/3534236?v=4" width="100px;" alt=""/><br /><sub><b>Jake Bolam</b></sub></a><br /><a href="https://github.com/tophat/with-immutable-props-to-js/commits?author=jakebolam" title="Documentation">📖</a> <a href="#infra-jakebolam" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="http://www.sanchitgera.ca"><img src="https://avatars0.githubusercontent.com/u/8632167?v=4" width="100px;" alt=""/><br /><sub><b>Sanchit Gera</b></sub></a><br /><a href="https://github.com/tophat/with-immutable-props-to-js/commits?author=sanchitgera" title="Documentation">📖</a></td>
    <td align="center"><a href="https://breezio.com"><img src="https://avatars1.githubusercontent.com/u/445636?v=4" width="100px;" alt=""/><br /><sub><b>Siavash Mahmoudian</b></sub></a><br /><a href="#infra-syavash" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="http://www.monicamoore.ca"><img src="https://avatars1.githubusercontent.com/u/8105535?v=4" width="100px;" alt=""/><br /><sub><b>monicamm95</b></sub></a><br /><a href="#design-monicamm95" title="Design">🎨</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/danilomatamoros"><img src="https://avatars0.githubusercontent.com/u/6589617?v=4" width="100px;" alt=""/><br /><sub><b>Danilo Matamoros</b></sub></a><br /><a href="https://github.com/tophat/with-immutable-props-to-js/commits?author=danilomatamoros" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/enheit"><img src="https://avatars1.githubusercontent.com/u/8645216?v=4" width="100px;" alt=""/><br /><sub><b>Roman Mahotskyi</b></sub></a><br /><a href="#infra-enheit" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="http://twitter.com/pfmmfp"><img src="https://avatars3.githubusercontent.com/u/2229060?v=4" width="100px;" alt=""/><br /><sub><b>Pablo Morra</b></sub></a><br /><a href="https://github.com/tophat/with-immutable-props-to-js/commits?author=pfmmfp" title="Code">💻</a> <a href="https://github.com/tophat/with-immutable-props-to-js/commits?author=pfmmfp" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/apps/dependabot"><img src="https://avatars0.githubusercontent.com/in/29110?v=4" width="100px;" alt=""/><br /><sub><b>dependabot[bot]</b></sub></a><br /><a href="#infra-dependabot[bot]" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://github.com/maarteti"><img src="https://avatars2.githubusercontent.com/u/1140243?v=4" width="100px;" alt=""/><br /><sub><b>jinwoo choi</b></sub></a><br /><a href="https://github.com/tophat/with-immutable-props-to-js/commits?author=maarteti" title="Code">💻</a></td>
    <td align="center"><a href="https://mcataford.github.io"><img src="https://avatars2.githubusercontent.com/u/6210361?v=4" width="100px;" alt=""/><br /><sub><b>Marc Cataford</b></sub></a><br /><a href="https://github.com/tophat/with-immutable-props-to-js/commits?author=mcataford" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/mh91chentophat"><img src="https://avatars3.githubusercontent.com/u/22596458?v=4" width="100px;" alt=""/><br /><sub><b>Michael Chen</b></sub></a><br /><a href="https://github.com/tophat/with-immutable-props-to-js/commits?author=mh91chentophat" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## Credits

Special thanks to [Carol Skelly](https://github.com/iatek) for donating the 'tophat' GitHub organization.
