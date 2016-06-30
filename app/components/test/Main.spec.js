import React from 'react'
// import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { shallow, mount } from 'enzyme'
import Main from '../Main'
import Header from '../Header'
import Options from '../Options'

describe('Main Component', () => {

  it('should render the Header and Options Component', () => {
    // const renderer = TestUtils.createRenderer()
    // renderer.render(<Main/>)
    // const actual = renderer.getRenderOutput()
    const wrapper = shallow(<Main/>)
    const expected = wrapper.containsAllMatchingElements([<Header/>, <Options/>])
    expect(expected).toEqual(true)
  });

});