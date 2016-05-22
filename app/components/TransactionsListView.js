import React, { Component } from 'react'
import TransactionEntryView from './TransactionEntryView'
import { styles } from '../styles/styles'

const Transactions = ({transactions, avg}) => {
  const transactionEntries = transactions.map((data, i) => {
    return (
      <TransactionEntryView key={i} {...data}/>
    )
  })

  return (
    <div>
      <table style={styles.table}>
        <tbody>
        <tr>
          <th style={styles.headerRow}>Month</th>
          <th style={styles.headerRow}>Total Spending</th>
          <th style={styles.headerRow}>Total Income</th>
        </tr>
        {transactionEntries}
        </tbody>
      </table>

      <table style={styles.table}>
        <tbody>
        <tr>
          <th></th>
          <th style={styles.headerRow}>Average Spending</th>
          <th style={styles.headerRow}>Average Income</th>
        </tr>
        <TransactionEntryView income={avg.income} spending={avg.spending}/>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions