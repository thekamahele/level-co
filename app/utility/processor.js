export const centocentsToDollars = (amount) => {
  return amount/10000
}

export const roundToTwoDecimals = (number) => {
  return Number(number.toFixed(2))
}

const getMonthTotals = (data) => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  return data.reduce((memo, current) => {
    const date = new Date(current['transaction-time'])
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()
    const monthYear = `${month}-${year}`

    if(monthYear in memo) {
      if(current.amount > 0) {
        memo[monthYear].income += centocentsToDollars(current.amount)
      } else {
        memo[monthYear].spending += centocentsToDollars(current.amount)
      }
    } else {
      memo[monthYear] = {spending: 0, income: 0}
    }
    return memo
  }, {})

}

const convertIntoArray = (object) => {
  const monthSummaries = []
  for(let key in object) {
    object[key].month = key
    object[key].spending = roundToTwoDecimals(object[key].spending)
    object[key].income = roundToTwoDecimals(object[key].income)
    monthSummaries.push(object[key])
  }
  return monthSummaries
}

export const getAverage = (data) => {
  const numOfMonths = Object.keys(data).length
  let spendingTotal = 0
  let incomeTotal = 0

  for(let key in data) {
    spendingTotal += data[key].spending
    incomeTotal += data[key].income
  }

  return {
    spending: roundToTwoDecimals(spendingTotal/numOfMonths),
    income: roundToTwoDecimals(incomeTotal/numOfMonths)
  }
}

export const processData = (data) => {
  const monthTotals = convertIntoArray(getMonthTotals(data))
  const average = getAverage(monthTotals)

  return {
    monthTotals,
    average
  }
}
