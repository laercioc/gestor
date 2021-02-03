import React, { FormEventHandler } from 'react'

import './styles.css'

interface Props {
  handleSubmitFormLogin: FormEventHandler
  handleInputChange: FormEventHandler
}

const Layout: React.FC<Props> = ({
  handleSubmitFormLogin,
  handleInputChange
}) => {
  return (
    <>
      <div className="home_container">
        <div className="content">
          <div className="title">
            <h1>Olá, usuário!</h1>
            <span>Faça login para acessar o sistema</span>
          </div>

          <form onSubmit={e => handleSubmitFormLogin(e)}>
            <input
              name="username"
              type="text"
              required
              placeholder="Digite seu usuário"
              onChange={handleInputChange}
            />

            <input
              name="password"
              type="password"
              required
              placeholder="Digite sua senha"
              onChange={handleInputChange}
            />

            <button type="submit">Entrar</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Layout
