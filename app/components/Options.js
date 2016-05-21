import React from 'react'
import { Link } from 'react-router'

const styles = {
  link: {
    borderRadius: '10px',
    background: '#119DA4',
    padding: '10px',
    margin: '10px',
    color: 'white',
    textDecoration: 'none'
  }
}

const Options = () => {
  return (
    <div>
      <Link to='/allTransactions' style={styles.link} >Monthly Summary</Link>
      <Link to='/projections' style={styles.link} >Projected</Link>
      <Link to='/creditPayments' style={styles.link} >Credit Payments</Link>
    </div>
  )
}

export default Options