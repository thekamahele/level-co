import request from 'request-promise'
import {filterCCPayments, filterDonuts} from '../utility/helpers'
var apiConfig = require('../apiConfig')

var reqOptions = {
  method: 'POST',
  uri: apiConfig.apiRoutes.getAll,
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

module.exports = {
  getAllTransactions: function(req, res) {
    return request(reqOptions)
  },

  unfilteredTransactions: function(req, res) {
    module.exports.getAllTransactions()
      .then(function(allData) {
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
          filteredData = filterDonuts(transData.transactions)
        }
        if (filter === 'credit') {
          filteredData = filterCCPayments(transData.transactions)
        }

        res.status(200).send(filteredData)
      })
      .catch(function(err) {
        res.send(err)
      })
    }
}
