import React, { ChangeEvent, FormEvent, useState } from 'react'
import Layout from './layout'

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  async function handleSubmitFormLogin(e: FormEvent) {
    e.preventDefault()
    console.log(formData)
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
