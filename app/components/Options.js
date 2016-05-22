import React from 'react'
import { Link } from 'react-router'
import { styles } from '../styles/styles'

const Options = () => {
  return (
    <div style={styles.navBar}>
      <Link to='/allTransactions' style={styles.link} >Monthly Summary</Link> <span style={{color: 'white'}}>|</span>
      <Link to='/projections' style={styles.link} >Projected</Link> <span style={{color: 'white'}}>|</span>
      <Link to='/creditPayments' style={styles.link} >Credit Payments</Link>
    </div>
  )
}

export default Options