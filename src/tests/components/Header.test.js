// react-test-renderer
import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../components/Header'

test('should render Header corretly', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper).toMatchSnapshot()

  // expect(wrapper.find('h1').text()).toBe('Expensify')
  // const renderer = new ReactShallowRenderer()
  // renderer.render(<Header />)
  // expect(renderer.getRenderOutput()).toMatchSnapshot()
})
