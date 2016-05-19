import axios from 'axios'

export const getTransactions = (filter) => {
  let requestURL = `/api/allTransactions/${filter}`
  return axios.get(requestURL)
}

export const getProjections = () => {
  let requestURL = '/api/projections'
  return axios.get(requestURL)
}