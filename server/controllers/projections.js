var request = require('request-promise')
var transactions = require('./transactions')
var apiConfig = require('../apiConfig')

var reqOptions = {
  method: 'POST',
  uri: apiConfig.apiRoutes.getProjections,
  body: {"args": {
    "uid": apiConfig.apiKey.uid,
    "token": apiConfig.apiKey.token,
    "api-token": apiConfig.apiKey.apiToken,
    "json-strict-mode": false,
    "json-verbose-response": false
    }
  },
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