export const filterDonuts = (data) => {
  return data.filter((transaction) => {
    return transaction.merchant !== 'Dunkin #336784' && transaction.merchant !== 'Krispy Kreme Donuts'
  })
}

export const filterCCPayments = (data) => {
  var transactions = {}

  transactions.nonCredit = data.filter((transaction) => {
    return transaction.merchant !== 'CC Payment' && transaction.merchant !== 'Credit Card Payment'
  })

  transactions.credit = data.filter((transaction) => {
    return transaction.merchant === 'CC Payment' || transaction.merchant === 'Credit Card Payment'
  })

  return transactions
}