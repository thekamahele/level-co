export const centocentsToDollars = (amount) => {
  return amount/10000
}

export const roundToTwoDecimals = (number) => {
  return Number(number.toFixed(2))
}

const getMonthTotals = (data) => {
  let monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  return data.reduce((memo, current) => {
    let date = new Date(current['transaction-time'])
    let month = monthNames[date.getMonth()]
    let year = date.getFullYear()
    let monthYear = `${month}-${year}`

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
    object[key].spending = Number((object[key].spending).toFixed(2))
    object[key].income = Number((object[key].income).toFixed(2))
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
    spending: Number((spendingTotal/numOfMonths).toFixed(2)),
    income: Number((incomeTotal/numOfMonths).toFixed(2))
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