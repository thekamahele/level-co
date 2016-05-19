import React from 'react'
import { Link } from 'react-router'

const Options = () => {
  return (
    <div>
      <Link to='/allTransactions'>All Transactions</Link>
      <Link to='/allTransactions/donuts'>Ignore Donuts</Link>
      <Link to='/allTransactions/credit'>Ignore Credit Payments</Link>
    </div>
  )
}

export default Options