var trans = require('../controllers/transactions')
var proj = require('../controllers/projections')

module.exports = function routes(app) {
  app.get('/allTransactions', trans.unfilteredTransactions)
  app.get('/allTransactions/:filter', trans.filterTransactions)
  app.get('/projections', proj.projectedSpending)
}