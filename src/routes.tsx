import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Admin from './pages/Admin'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/admin" component={Admin} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
