import React from 'react'
import { centocentsToDollars } from '../utility/processor'

const styles = {
  row: {
    borderBottom: 'solid 1px lightgray',
    marginBottom: '5px',
    padding: '10px',
    color: 'gray'
  }
}

const TransactionEntryView = ({spending, month, income, date, amount}) => {
  if(date && amount) {
    let formatDate = new Date(date).toLocaleDateString('en-US')
    return(
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