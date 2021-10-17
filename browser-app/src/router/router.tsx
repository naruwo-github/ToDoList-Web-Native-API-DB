import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../components/standard/app'
import Admin from '../components/admin/admin'

export default function Router () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/admin" component={Admin}/>
      </Switch>
    </BrowserRouter>
  )
}