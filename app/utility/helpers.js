import axios from 'axios'

export const getTransactions = (filter) => {
  let requestURL = filter ? `/api/allTransactions/${filter}` : '/api/allTransactions'
  return axios.get(requestURL)
}

export const getProjections = () => {
  let requestURL = '/api/projections'
  return axios.get(requestURL)
}