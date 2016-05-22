import React, { Component } from 'react'
import { getProjections } from '../utility/helpers'
import { processData, roundToTwoDecimals } from '../utility/processor'
import { styles } from '../styles/styles'

class Projections extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projections: [],
      allTransactions: [],
      isLoading: true
    }
  }

  componentWillMount() {
    getProjections()
      .then((response) => {
        let projections = processData(response.data.projections).average
        let allTransactions = processData(response.data.allTransactions).average
        this.setState({
          projections,
          allTransactions,
          isLoading: false
        })
      })
  }

  render() {
    const {projections, allTransactions} = this.state

    if (this.state.isLoading) {
      return <h2 style={styles.container}>We are making predictions...</h2>
    }

    const currSpending = roundToTwoDecimals(Math.abs(projections.spending))
    const currIncome = roundToTwoDecimals(projections.income)
    const expectedIncome = roundToTwoDecimals(Math.abs(allTransactions.income - projections.income))
    const expectedSpending = roundToTwoDecimals(Math.abs(allTransactions.spending - projections.spending))

    return (
      <div style={styles.container}>
        <h2>Projections for Month</h2>
        <div style={styles.text}>
          <div>{`Your current spending is $${currSpending}`}</div>
          <div>{`Your current income is $${currIncome}`}</div>
          <br/>
          <div>{`Your expected spending from today is $${expectedSpending}`}</div>
          <div>{`Your expected income from today is $${expectedIncome}`}</div>
        </div>
      </div>
    )
  }
}

export default Projections