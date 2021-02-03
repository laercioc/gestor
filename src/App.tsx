import React, { useEffect } from 'react'
import Notifications, { notify } from 'react-notify-toast'
import { Provider, useDispatch } from 'react-redux'

import './assets/css/global.css'
import store from './redux/store'
import API from './services/api'
import Routes from './routes'

const Auth: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    async function Auth() {
      if (localStorage.getItem('token')) {
        const response = await API.post('auth', {
          token: localStorage.getItem('token')
        })

        if (response.data.error) {
          dispatch({ type: 'SET_LOADING', loading: false })
          return notify.show(response.data.message, 'error', 5000)
        } else {
          dispatch({ type: 'SET_LOGGED' })
          dispatch({ type: 'SET_LOADING', loading: false })
          dispatch({ type: 'SET_LOGGED_TOKEN', token: response.data.token })

          localStorage.setItem('token', response.data.token)
          return false
        }
      } else {
        dispatch({ type: 'SET_LOADING', loading: false })
        return false
      }
    }

    Auth()
  }, [])

  return <></>
}

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Auth />
      <Routes />
      <Notifications />
    </Provider>
  )
}

export default App
