import request from 'request-promise'
import { filterCCPayments, filterDonuts } from '../utility/helpers'
import { apiKey, apiRoutes } from '../apiConfig'

const reqOptions = {
  method: 'POST',
  uri: apiRoutes.getAll,
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

export const getAllTransactions = () => request(reqOptions)

export function unfilteredTransactions(req, res) {
  getAllTransactions()
    .then((allData) => {
      res.status(201).send(allData)
    })
    .catch(err => res.send(err))
}

export function filterTransactions(req, res) {
  const filter = req.params.filter

  request(reqOptions)
    .then((transData) => {
      let filteredData

      if(filter === 'donuts') {
        filteredData = filterDonuts(transData.transactions)
      }
      if (filter === 'credit') {
        filteredData = filterCCPayments(transData.transactions)
      }

      res.status(200).send(filteredData)
    })
    .catch(err => res.send(err))
}
