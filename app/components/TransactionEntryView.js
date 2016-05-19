import React from 'react'

const TransactionEntryView = ({transaction}) => {
  return (
    <tr>
      <td>{transaction.month}</td>
      <td>{transaction.spending}</td>
      <td>{transaction.income}</td>
    </tr>
  )
}

export default TransactionEntryView