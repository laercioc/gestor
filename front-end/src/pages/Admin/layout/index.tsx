import React from 'react'
import { Route, Link } from 'react-router-dom'

import './styles.css'

interface IAdmin {
  currentRoute: any
  handleUserLogout: any
}

const Layout: React.FC<IAdmin> = ({ currentRoute, handleUserLogout }) => {
  return (
    <>
      <div className="admin_container">
        <div className="nav">
          <div className="title">Administrativo</div>

          <ul>
            <Link to={'/admin'}>
              <li className={currentRoute === '/admin' ? 'active' : ''}>
                Início
              </li>
            </Link>

            <Link to={'/admin/employees'}>
              <li
                className={currentRoute === '/admin/employees' ? 'active' : ''}
              >
                Funcionários
              </li>
            </Link>

            <Link to={'/'}>
              <li
                className={currentRoute === '/admin/positions' ? 'active' : ''}
              >
                Cargos
              </li>
            </Link>
          </ul>

          <button className="logout" onClick={() => handleUserLogout()}>
            Sair
          </button>
        </div>
        <div className="main">
          <Route path="/admin" exact>
            <h1>main</h1>
          </Route>

          <Route path="/admin/create" exact>
            <h1>create</h1>
          </Route>
        </div>
      </div>
    </>
  )
}

export default Layout
