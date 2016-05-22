import React, { Component } from 'react'
import TransactionsListView from './TransactionsListView'
import { getTransactions } from '../utility/helpers'
import { processData } from '../utility/processor'
import { styles } from '../styles/styles'

class SummaryView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      transactionData: null,
      donutData: null,
      creditData: null,
      currentTab: '',
      isLoading: true
    }
  }

  componentWillMount() {
    this.allTransactions()
  }

  loadingData() {
    this.setState({
      isLoading: true
    })
  }

  ignoreDonuts() {
    this.loadingData()
    getTransactions('donuts')
      .then((response) => {
        this.setState({
          donutData: processData(response.data),
          currentTab: 'donuts',
          isLoading: false
        })
      })
  }

  ignoreCredit() {
    this.loadingData()
    getTransactions('credit')
      .then((response) => {
        this.setState({
          creditData: processData(response.data.nonCredit),
          currentTab: 'credit',
          isLoading: false
        })
      })
  }

  allTransactions() {
    this.loadingData()
    getTransactions()
      .then((response) => {
        this.setState({
          transactionData: processData(response.data.transactions),
          currentTab: '',
          isLoading: false
        })
      })
  }

  render() {
    const {transactionData, donutData, creditData, currentTab, isLoading} = this.state
    return (
      <div style={styles.container}>

        <div style={styles.summary}>
          <div style={{fontSize: '.8em'}}>Filters:</div>
          <button style={styles.button} onClick={this.allTransactions.bind(this)}>All Transactions</button>
          <button style={styles.button} onClick={this.ignoreDonuts.bind(this)}>Ignore Donuts</button>
          <button style={styles.button} onClick={this.ignoreCredit.bind(this)}>Ignore Credit</button>
        </div>

        { isLoading ? <h2>We are currently fetching your data...</h2> :
          <div style={styles.summary}>
            { currentTab === '' && transactionData ?
              <TransactionsListView transactions={transactionData.monthTotals} avg={transactionData.average}/> : null }
            { currentTab === 'donuts' && donutData ?
              <TransactionsListView transactions={donutData.monthTotals} avg={donutData.average}/> : null }
            { currentTab === 'credit' && creditData ?
              <TransactionsListView transactions={creditData.monthTotals} avg={creditData.average}/> : null }
          </div>
        }
      </div>
    )
  }
}

export default SummaryView