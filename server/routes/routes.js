import { unfilteredTransactions, filterTransactions } from '../controllers/transactions'
import { projectedSpending } from '../controllers/projections'

export function routes(app) {
  app.get('/allTransactions', unfilteredTransactions)
  app.get('/allTransactions/:filter', filterTransactions)
  app.get('/projections', projectedSpending)
}
