import request from 'request-promise'
import { getAllTransactions } from './transactions'
import { apiKey, apiRoutes } from '../apiConfig'

const reqOptions = {
  method: 'POST',
  uri: apiRoutes.getProjections,
  body: {"args": {
    "uid": apiKey.uid,
    "token": apiKey.token,
    "api-token": apiKey.apiToken,
    "json-strict-mode": false,
    "json-verbose-response": false
    }
  },
  json: true
}


export function projectedSpending(req, res) {
  request(reqOptions)
    .then(function(projections) {
      return [projections, getAllTransactions()]
    })
    .spread(function(projections, transactions) {
      const data = {}
      data.projections = projections.transactions
      data.allTransactions = transactions.transactions

      res.send(data)
    })
}
