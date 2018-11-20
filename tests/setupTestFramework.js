import enzyme from 'enzyme'
import React from 'react'

const [reactMajorVersion] = React.version.split('.')

const Adapter = require(reactMajorVersion === '15'
    ? 'enzyme-adapter-react-15'
    : 'enzyme-adapter-react-16')

enzyme.configure({ adapter: new Adapter() })
