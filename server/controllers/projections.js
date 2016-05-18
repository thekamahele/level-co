var request = require('request-promise')
var transactions = require('./transactions')

var reqOptions = {
  method: 'POST',
  uri: 'https://prod-api.level-labs.com/api/v2/core/projected-transactions-for-month',
  body: {"args": {"uid": 1110590645, "token": "7AD5F25F9683727E22B04B4D5D4E72FD", "api-token": "AppTokenForInterview", "json-strict-mode": false, "json-verbose-response": false}},
  json: true
}

module.exports =  {
  projectedSpending: function(req, res) {
    request(reqOptions)
      .then(function(projections) {
        return [projections, transactions.getAllTransactions()]
      })
      .spread(function(projections, transactions) {
        var data = {}
        data.projections = projections.transactions
        data.allTransactions = transactions.transactions

        res.send(data)
      })
  }
}