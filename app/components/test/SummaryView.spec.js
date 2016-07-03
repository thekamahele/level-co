import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import SummaryView from '../SummaryView'
import TransactionsListView from '../TransactionsListView'

describe('SummaryView Structure', () => {
let renderedComponent

  beforeEach(() => {
    renderedComponent = shallow(<SummaryView></SummaryView>)
  })
  
  it('should render three buttons', () => {
    const actual = renderedComponent.find('button')
    expect(actual.length).toEqual(3)
  })

  it('should render TransactionsListView', () => {
    renderedComponent.setState({
      currentTab: 'donuts',
      donutData: {monthTotals: [{}, {}]},
      isLoading: false
    })
    const actual = renderedComponent.find(TransactionsListView).length
    expect(actual).toEqual(1)
  })

  it('should display fetching message if isLoading is true', () => {
    renderedComponent.setState({
      isLoading: true
    })
    const actual = renderedComponent.find('h2')
    expect(actual.text()).toEqual('We are currently fetching your data...')
  })

  it('should not display fetching message if isLoading is false', () => {
    renderedComponent.setState({
      isLoading: false
    })
    const actual = renderedComponent.find('h2')
    expect(actual.length).toEqual(0)
  })
})