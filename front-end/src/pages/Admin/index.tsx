import React, { useEffect } from 'react'
import { notify } from 'react-notify-toast'
import { useHistory, useLocation } from 'react-router-dom'
import {
  useDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook
} from 'react-redux'
import IState from '../../redux/IStore'

import API from '../../services/api'
import Layout from './layout'

const Admin: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const useSelector: TypedUseSelectorHook<IState> = useReduxSelector
  const state = useSelector(state => state)

  useEffect(() => {
    if (!state.user.logged) {
      history.push('/')
    }
  }, [])

  function handleUserLogout() {
    localStorage.removeItem('token')
    dispatch({ type: 'SET_LOGOUT' })
    dispatch({ type: 'SET_LOGGED_TOKEN', token: '' })

    history.push('/')
  }

  return (
    <Layout
      currentRoute={location.pathname}
      handleUserLogout={handleUserLogout}
    />
  )
}

export default Admin
