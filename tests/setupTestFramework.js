import enzyme from 'enzyme'

const Adapter = require('enzyme-adapter-react-16')

enzyme.configure({ adapter: new Adapter() })
