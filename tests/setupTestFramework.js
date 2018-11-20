import enzyme from 'enzyme'
import React15Adapter from 'enzyme-adapter-react-15'
import React16Adapter from 'enzyme-adapter-react-16'
import React from 'react'

const [reactMajorVersion] = React.version.split('.')

const adapter =
    reactMajorVersion === '15' ? new React15Adapter() : new React16Adapter()

enzyme.configure({ adapter })
