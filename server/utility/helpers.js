export const filterDonuts = (data) => {
  return data.filter((transaction) => {
    return transaction.merchant !== 'Dunkin #336784' && transaction.merchant !== 'Krispy Kreme Donuts'
  })
}

export const filterCCPayments = (data) => {
  const nonCredit = data.filter((transaction) => {
    return transaction.merchant !== 'CC Payment' && transaction.merchant !== 'Credit Card Payment'
  })

  const credit = data.filter((transaction) => {
    return transaction.merchant === 'CC Payment' || transaction.merchant === 'Credit Card Payment'
  })

  return {
    nonCredit,
    credit
  }
}
