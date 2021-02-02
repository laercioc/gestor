import { createStore } from 'redux'

const initialState = {
  user: {
    logged: false,
    token: ''
  }
}

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOGGED') {
    return { ...state, user: { ...state.user, logged: true } }
  }

  if (action.type === 'SET_LOGOUT') {
    return { ...state, user: { ...state.user, logged: false } }
  }

  if (action.type === 'SET_LOGGED_TOKEN') {
    return { ...state, user: { ...state.user, token: action.token } }
  }

  return state
}

const store = createStore(reducer)

export default store
