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
                className={
                  ['/admin/employees', '/admin/employees/create'].includes(
                    currentRoute
                  )
                    ? 'active'
                    : ''
                }
              >
                Funcionários
              </li>
            </Link>

            <Link to={'/admin/positions'}>
              <li
                className={
                  ['/admin/positions', '/admin/positions/create'].includes(
                    currentRoute
                  )
                    ? 'active'
                    : ''
                }
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
              createLink="/admin/employees/create"
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
              createLink="/admin/positions/create"
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

          <Route path="/admin/employees/create" exact>
            <List
              title="Funcionários"
              boxName="Adicione um novo funcionário"
              backLink="/admin/employees"
            >
              <form>
                <div className="input-content">
                  <label htmlFor="name">Nome</label>
                  <input type="text" id="name" name="name" />
                </div>

                <div className="input-content">
                  <label htmlFor="surname">Sobrenome</label>
                  <input type="text" id="surname" name="surname" />
                </div>

                <div className="input-content">
                  <label htmlFor="office_id">Cargo</label>
                  <select name="office_id" id="office_id">
                    <option value="0">Selecione um cargo</option>
                  </select>
                </div>

                <div className="input-content">
                  <label htmlFor="birthday">Data de anivérsario</label>
                  <input type="date" id="birthday" name="birthday" />
                </div>

                <div className="input-content">
                  <label htmlFor="salary">Salário</label>
                  <input type="number" id="salary" name="salary" />
                </div>

                <button>Enviar</button>
              </form>
            </List>
          </Route>

          <Route path="/admin/positions/create" exact>
            <List
              title="Cargos"
              boxName="Adicione um novo cargos"
              backLink="/admin/positions"
            >
              <form>
                <div className="input-content">
                  <label htmlFor="name">Nome</label>
                  <input type="text" id="name" name="name" />
                </div>
                <button>Enviar</button>
              </form>
            </List>
          </Route>
        </div>
      </div>
    </>
  )
}

export default Layout
