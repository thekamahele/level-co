import React, { Component } from 'react'
import { getTransactions } from '../utility/helpers'
import TransactionEntryView from './TransactionEntryView'

const styles = {
  container: {
    marginTop: '25px',
    textAlign: 'center'
  },
  summary: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
    alignItems: 'center'
  },
  header: {
    color: '#119DA4',
    fontSize: '1.3em',
    borderBottom: 'solid 2px #13505B',
    marginBottom: '10px',
    padding: '10px'
  },
  table: {
    borderCollapse: 'collapse'
  }
}

class CreditPayments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      payments: [],
      isLoading: true
    }
  }

  componentWillMount() {
    getTransactions('credit')
      .then((response) => {
        this.setState({
          payments: response.data.credit,
          isLoading: false
        })
      })
  }

  render() {
    const {payments} = this.state
    const transactionList = payments.map((transaction, i) => {
      if (transaction.amount > 0) {
        return <TransactionEntryView key={i} date={transaction['transaction-time']} amount={transaction.amount}/>
      }
    })

    if(this.state.isLoading) {
      return <h2 style={styles.container}>We are fetching your credit payments...</h2>
    }

    return (
      <div style={styles.container}>
        <h2>Credit Card Payments</h2>
        <div style={styles.summary}>

        <table style={styles.table}>
          <tbody>
          <tr>
            <th style={styles.header}>Payment Date</th>
            <th style={styles.header}>Amount</th>
          </tr>
          {transactionList}
          </tbody>
        </table>
        </div>
      </div>
    )
  }
}

export default CreditPayments