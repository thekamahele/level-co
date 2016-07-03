import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'
import Options from '../Options'
import { Link } from 'react-router'

describe('Options Component', () => {

  it('should have three links', () => {
    const renderedComponent = shallow(<Options/>)
    const actual = renderedComponent.find('Link').length
    expect(actual).toEqual(3)
  })

  it('should display the correct link text', () => {
    const LinkText = ['Monthly Summary', 'Credit Payments', 'Projected']
    const renderedComponent = shallow(<Options/>)
    renderedComponent.find('Link').forEach((node) => {
      let actual = node.children().node
      expect(LinkText.indexOf(actual)).toNotEqual(-1)
    })
  })

  it('should have the correct href', () => {
    const LinkHREF = ['/allTransactions', '/projections', '/creditPayments']
    const renderedComponent = shallow(<Options/>)
    renderedComponent.find('Link').forEach((node) => {
      const actual = node.prop('to')
      expect(LinkHREF.indexOf(actual)).toNotEqual(-1)
    })
  })

  // const onClickSpy = expect.createSpy()
  // node.simulate('click')
  // expect(onClickSpy).toHaveBeenCalled()
})