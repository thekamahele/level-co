var request = require('request-promise')
var helpers = require('../utility/helpers')

var reqOptions = {
  method: 'POST',
  uri: 'https://prod-api.level-labs.com/api/v2/core/get-all-transactions',
  body: {"args": {"uid": 1110590645, "token": "7AD5F25F9683727E22B04B4D5D4E72FD", "api-token": "AppTokenForInterview", "json-strict-mode": false, "json-verbose-response": false}},
  json: true
}

module.exports = {
  getAllTransactions: function(req, res) {

    // request(reqOptions)
    //   .then(function(transData) {
    //     res.status(201).send(transData)
    //   })
    //   .catch(function(err) {
    //     console.error(err)
    //   })

    return request(reqOptions)
  },

  unfilteredTransactions: function(req, res) {
    module.exports.getAllTransactions()
      .then(function(allData) {
        console.log('all', allData)
        res.status(201).send(allData)
      })
      .catch(function(err) {
        res.send(err)
      })

  },

  filterTransactions: function(req, res) {
    var filter = req.params.filter

    request(reqOptions)
      .then(function(transData) {
        var filteredData;

        if(filter === 'donuts') {
          filteredData = helpers.filterDonuts(transData.transactions)
        }
        if (filter === 'credit') {
          filteredData = helpers.filterCCPayments(transData.transactions)
        }

        res.status(200).send(filteredData)
      })
      .catch(function(err) {
        res.send(err)
      })
    }
}
