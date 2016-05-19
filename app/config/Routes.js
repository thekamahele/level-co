import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Main from '../components/Main'
import Transactions from '../components/TransactionsListView'

export default (
  <Route path="/" component={Main}>
    <Route path="/allTransactions" component={Transactions} />

  </Route>
);

// <Route path="/allTransactions" component={Transactions}>
//   <Route path="/donuts" component={Donuts}/>
//   <Route path="/credit" component={Credit}/>
// </Route>
// <Route path="/projections" component={Projections} />
//   <IndexRoute component={Home} />