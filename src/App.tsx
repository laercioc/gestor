import React from 'react'
import Routes from './routes'
import Notifications from 'react-notify-toast'
import { Provider } from 'react-redux'

import './assets/css/global.css'
import store from './redux/store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
      <Notifications />
    </Provider>
  )
}

export default App
