import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './config/Routes'

ReactDOM.render(
  <Router history={ browserHistory }>{routes}</Router>,
  document.getElementById('app')
)