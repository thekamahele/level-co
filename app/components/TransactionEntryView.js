import React from 'react'
import { centocentsToDollars } from '../utility/processor'
import { styles } from '../styles/styles'

const TransactionEntryView = ({spending, month, income, date, amount}) => {
  if (date && amount) {
    let formatDate = new Date(date).toLocaleDateString('en-US')
    return (
      <tr style={styles.row}>
        <td style={styles.row}>{formatDate}</td>
        <td style={styles.row}>${centocentsToDollars(amount)}</td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td style={styles.row}>{month ? month : null}</td>
        <td style={styles.row}>${Math.abs(spending)}</td>
        <td style={styles.row}>${income}</td>
      </tr>
    )
  }
}

export default TransactionEntryView