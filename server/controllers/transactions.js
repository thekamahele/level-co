var request = require('request-promise')
var helpers = require('../utility/helpers')
var apiConfig = require('../apiConfig')

var reqOptions = {
  method: 'POST',
  uri: apiConfig.apiRoutes.getAll,
  body: {"args": {
      "uid": apiConfig.apiKey.uid,
      "token": apiConfig.apiKey.token,
      "api-token": apiConfig.apiKey.apiToken,
      "json-strict-mode": false, 
      "json-verbose-response": false}
  },
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
