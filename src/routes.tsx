import React from 'react'
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook
} from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import IState from './redux/IStore'

import Home from './pages/Home'
import Admin from './pages/Admin'

import Loading from './components/Loading'

const Routes: React.FC = () => {
  const useSelector: TypedUseSelectorHook<IState> = useReduxSelector
  const state = useSelector(state => state)
  return (
    <BrowserRouter>
      {state.loading ? (
        <Loading />
      ) : (
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/admin" component={Admin} />
        </Switch>
      )}
    </BrowserRouter>
  )
}

export default Routes
