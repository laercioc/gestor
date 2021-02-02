import React, { ChangeEvent, FormEvent, useState } from 'react'
import { notify } from 'react-notify-toast'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import API from '../../services/api'
import Layout from './layout'

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const dispatch = useDispatch()
  const history = useHistory()

  async function handleSubmitFormLogin(e: FormEvent) {
    e.preventDefault()

    const response = await API.post('/login', formData)

    if (response.data.error) {
      console.log(response.data.error)
      return notify.show(response.data.message, 'error', 5000)
    } else {
      dispatch({ type: 'SET_LOGGED' })
      dispatch({ type: 'SET_LOGGED_TOKEN', token: response.data.token })

      localStorage.setItem('token', response.data.token)
      history.push('/admin')
    }
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Layout
      handleSubmitFormLogin={handleSubmitFormLogin}
      handleInputChange={handleInputChange}
    />
  )
}

export default Home
