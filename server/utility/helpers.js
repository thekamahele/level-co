var filter = require('lodash/collection/filter')

//could refactor to accept merchant name

module.exports = {
  filterDonuts: function(data) {
    return filter(data, function(transaction) {
      return transaction.merchant !== 'Dunkin #336784' && transaction.merchant !== 'Krispy Kreme Donuts'
    })
  },

  filterCCPayments: function(data) {
    return filter(data, function(transaction) {
      return transaction.merchant !== 'CC Payment' && transaction.merchant !== 'Credit Card Payment'
    })
  }
}