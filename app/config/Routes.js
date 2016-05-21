import React from 'react'
import { Route } from 'react-router'
import Main from '../components/Main'
import SummaryView from '../components/SummaryView'
import Projections from '../components/Projections'
import CreditPayments from '../components/CreditPayments'

export default (
  <Route path="/" component={Main}>
    <Route path="/allTransactions" component={SummaryView} />
    <Route path="/projections" component={Projections} />
    <Route path="/creditPayments" component={CreditPayments} />
  </Route>
);
