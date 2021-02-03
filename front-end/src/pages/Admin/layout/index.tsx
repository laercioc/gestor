import React from 'react'
import { Route, Link } from 'react-router-dom'
import List from '../../../components/List'

import './styles.css'

interface IAdmin {
  currentRoute: string
  handleUserLogout: React.MouseEventHandler<HTMLButtonElement>
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

            <Link to={'/admin/positions'}>
              <li
                className={currentRoute === '/admin/positions' ? 'active' : ''}
              >
                Cargos
              </li>
            </Link>
          </ul>

          <button className="logout" onClick={handleUserLogout}>
            Sair
          </button>
        </div>
        <div className="main">
          <Route path="/admin" exact>
            <List title="Página Inicial" boxName="Olá, usuário">
              <p>
                Seja bem vindo ao gestor, utilize o menu ao lado para navegar
                entre os modulos.
              </p>
            </List>
          </Route>

          <Route path="/admin/employees" exact>
            <List
              title="Funcionários"
              boxName="Lista de funcionários"
              createLink="admin/employees/create"
            >
              <table>
                <thead>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Cargo</th>
                  <th>Aniversário</th>
                  <th>Salário</th>
                  <th>Data de criação</th>
                  <th>Ações</th>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Laercio Calheiros</td>
                    <td>Programador</td>
                    <td>04/09/2000</td>
                    <td>R$ 1,00</td>
                    <td>03/02/2021 às 01:30</td>
                    <td>
                      <div className="btns">
                        <div className="btn red">Excluir</div>
                        <div className="btn green">Editar</div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>Laercio Calheiros</td>
                    <td>Programador</td>
                    <td>04/09/2000</td>
                    <td>R$ 1,00</td>
                    <td>03/02/2021 às 01:30</td>
                    <td>
                      <div className="btns">
                        <div className="btn red">Excluir</div>
                        <div className="btn green">Editar</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </List>
          </Route>
          <Route path="/admin/positions" exact>
            <List
              title="Cargos"
              boxName="Lista de cargos"
              createLink="admin/positions/create"
            >
              <table>
                <thead>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Data de criação</th>
                  <th>Ações</th>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Programador</td>
                    <td>03/02/2021 às 01:30</td>
                    <td>
                      <div className="btns">
                        <div className="btn red">Excluir</div>
                        <div className="btn green">Editar</div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>Programador</td>
                    <td>03/02/2021 às 01:30</td>
                    <td>
                      <div className="btns">
                        <div className="btn red">Excluir</div>
                        <div className="btn green">Editar</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </List>
          </Route>
        </div>
      </div>
    </>
  )
}

export default Layout
