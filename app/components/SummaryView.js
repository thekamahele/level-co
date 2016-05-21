import React, { Component } from 'react'
import TransactionsListView from './TransactionsListView'
import { getTransactions } from '../utility/helpers'

class SummaryView extends Component {
  constructor() {
    super(props)
    this.state = {
      transactionData: null
    }
  }

  componentWillMount() {
    console.log('mounting')
    getTransactions()
      .then((data) => {
        console.log('data', data)

        this.setState = {
          transactionData: data
        }
      })
  }

  render() {
    return (
      <div>
        <h2>This is your spending and income summary</h2>
        <TransactionsListView data={this.state.transactionData}/>
      </div>
    )

  }
}