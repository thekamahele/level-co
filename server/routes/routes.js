//endpoints and what functions to fire
//import controllers
var trans = require('../controllers/transactions')
var proj = require('../controllers/projections')

module.exports = function routes(app) {
  app.get('/allTransactions', trans.getAllTransactions)
  app.get('/allTransactions/:filter', trans.filterTransactions)
  app.get('/projections')
}