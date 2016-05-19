import React, { Component } from 'react'
import TransactionEntryView from './TransactionEntryView'

class Transactions extends Component {
  render() {
    const range = [{month: 'February 2016', spending: 2863, income: 3000},
      {month: 'February 2016', spending: 2863, income: 3000},
      {month: 'February 2016', spending: 2863, income: 3000},
      {month: 'February 2016', spending: 2863, income: 3000},
      {month: 'February 2016', spending: 2863, income: 3000},
      {month: 'February 2016', spending: 2863, income: 3000},
      {month: 'February 2016', spending: 2863, income: 3000}]
    const transactionEntries = range.map((data, i) => {
      return (
        <TransactionEntryView key={i} transaction={data}/>
      )
    })
    return(
      <div>
        <table>
          <tbody>
            {transactionEntries}
          </tbody>
        </table>

        <h3>Average Spending</h3>
        <table>
          <tbody>
          <TransactionEntryView transaction={{month: 'February 2016', spending: 2863, income: 3000}}/>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Transactions