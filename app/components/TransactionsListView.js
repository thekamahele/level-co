import React, { Component } from 'react'
import TransactionEntryView from './TransactionEntryView'

const styles = {
  table: {
    textAlign: 'center',
    borderCollapse: 'collapse',
    margin: '0 auto'
  },
  header: {
    color: '#119DA4',
    fontSize: '1.3em'
  },
  row: {
    borderBottom: 'solid 2px #13505B',
    marginBottom: '10px',
    padding: '10px'
  }
}

class Transactions extends Component {
  render() {
    const {transactions, avg} = this.props
    const transactionEntries = transactions.map((data, i) => {
      return (
        <TransactionEntryView key={i} {...data}/>
      )
    })
    return (
      <div>
        <table style={styles.table}>
          <tbody>
          <tr style={styles.header}>
            <th style={styles.row}>Month</th>
            <th style={styles.row}>Total Spending</th>
            <th style={styles.row}>Total Income</th>
          </tr>
          {transactionEntries}
          </tbody>
        </table>

        <table style={styles.table}>
          <tbody>
          <tr style={styles.header}>
            <th></th>
            <th style={styles.row}>Average Spending</th>
            <th style={styles.row}>Average Income</th>
          </tr>
          <TransactionEntryView income={avg.income} spending={avg.spending}/>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Transactions