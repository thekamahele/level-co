var filter = require('lodash/collection/filter')

module.exports = {
  filterDonuts: function(data) {
    return filter(data, function(transaction) {
      return transaction.merchant !== "Dunkin #336784" && transaction.merchant !== "Krispy Kreme Donuts"
    })
  }
}