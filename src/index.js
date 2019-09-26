import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from 'pages'
import { Routes } from 'utils'
import './index.css'

ReactDOM.render(<BrowserRouter>
  <Switch>
    <Route exact path={Routes.ACTIVE.ROOT} component={Home} />
  </Switch>
</BrowserRouter>, document.getElementById('app'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
