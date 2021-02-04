import React, { FormEventHandler } from 'react'
import Moment from 'moment'
import 'moment/locale/pt-br'
import { Route, Link } from 'react-router-dom'
import List from '../../../components/List'

import IPositions from '../../../interfaces/IPositions'
import IEmployees from '../../../interfaces/IEmployees'

import './styles.css'

interface IAdmin {
  // general
  currentRoute: string
  handleUserLogout: React.MouseEventHandler<HTMLButtonElement>

  // positions
  PositionsList: IPositions[]
  handlePositionsAddSubmit: FormEventHandler
  handleInputChangePosition: FormEventHandler
  handlePositionsEditSubmit: FormEventHandler
  DeletePosition: any
  EditPosition: any
  EditPositionState: IPositions

  // employees
  EmployeesList: IEmployees[]
  handleEmployeesAddSubmit: FormEventHandler
  handleInputChangeEmployees: FormEventHandler
  handleEmployeesEditSubmit: FormEventHandler
  DeleteEmployees: any
  EditEmployees: any
  EditEmployeesState: IEmployees
}

const Layout: React.FC<IAdmin> = ({
  currentRoute,
  handleUserLogout,

  PositionsList,
  handlePositionsAddSubmit,
  handleInputChangePosition,
  handlePositionsEditSubmit,
  DeletePosition,
  EditPosition,
  EditPositionState,

  EmployeesList,
  handleEmployeesAddSubmit,
  handleInputChangeEmployees,
  handleEmployeesEditSubmit,
  DeleteEmployees,
  EditEmployees,
  EditEmployeesState
}) => {
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
                  {EmployeesList.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>
                        {item.name} {item.surname}
                      </td>
                      <td>{item.position}</td>
                      <td>{item.birthday}</td>
                      <td>R$ {item.salary}</td>
                      <td>
                        {Moment(item.created_at, 'YYYYMMDD')
                          .utcOffset(-3)
                          .fromNow()}
                      </td>
                      <td>
                        <div className="btns">
                          <div
                            className="btn red"
                            onClick={() => DeleteEmployees(item.id)}
                          >
                            Excluir
                          </div>
                          <div
                            className="btn green"
                            onClick={() => EditEmployees(item.id)}
                          >
                            Editar
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
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
                  {PositionsList.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>
                        {Moment(item.created_at, 'YYYYMMDD')
                          .utcOffset(-3)
                          .fromNow()}
                      </td>
                      <td>
                        <div className="btns">
                          <div
                            className="btn red"
                            onClick={() => DeletePosition(item.id)}
                          >
                            Excluir
                          </div>
                          <div
                            className="btn green"
                            onClick={() => EditPosition(item.id)}
                          >
                            Editar
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
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
              <form onSubmit={e => handleEmployeesAddSubmit(e)}>
                <div className="input-content">
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    onChange={handleInputChangeEmployees}
                  />
                </div>

                <div className="input-content">
                  <label htmlFor="surname">Sobrenome</label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    required
                    onChange={handleInputChangeEmployees}
                  />
                </div>

                <div className="input-content">
                  <label htmlFor="office_id">Cargo</label>
                  <select
                    name="office_id"
                    id="office_id"
                    required
                    onChange={handleInputChangeEmployees}
                  >
                    {PositionsList.map(item => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input-content">
                  <label htmlFor="birthday">Data de anivérsario</label>
                  <input
                    type="date"
                    id="birthday"
                    name="birthday"
                    required
                    onChange={handleInputChangeEmployees}
                  />
                </div>

                <div className="input-content">
                  <label htmlFor="salary">Salário</label>
                  <input
                    type="number"
                    id="salary"
                    name="salary"
                    required
                    onChange={handleInputChangeEmployees}
                  />
                </div>

                <button type="submit">Enviar</button>
              </form>
            </List>
          </Route>

          <Route path="/admin/employees/edit/:id" exact>
            <List
              title="Funcionários"
              boxName="Edite um funcionário"
              backLink="/admin/employees"
            >
              <form onSubmit={e => handleEmployeesEditSubmit(e)}>
                <div className="input-content">
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    defaultValue={EditEmployeesState.name}
                    onChange={handleInputChangeEmployees}
                  />
                </div>

                <div className="input-content">
                  <label htmlFor="surname">Sobrenome</label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    required
                    defaultValue={EditEmployeesState.surname}
                    onChange={handleInputChangeEmployees}
                  />
                </div>

                <div className="input-content">
                  <label htmlFor="office_id">Cargo</label>
                  <select
                    name="office_id"
                    id="office_id"
                    required
                    onChange={handleInputChangeEmployees}
                  >
                    {PositionsList.map(item => (
                      <option
                        key={item.id}
                        value={item.id}
                        selected={EditEmployeesState.office_id === item.id}
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input-content">
                  <label htmlFor="birthday">Data de anivérsario</label>
                  <input
                    type="date"
                    id="birthday"
                    name="birthday"
                    required
                    defaultValue={EditEmployeesState.birthday}
                    onChange={handleInputChangeEmployees}
                  />
                </div>

                <div className="input-content">
                  <label htmlFor="salary">Salário</label>
                  <input
                    type="number"
                    id="salary"
                    name="salary"
                    required
                    defaultValue={EditEmployeesState.salary}
                    onChange={handleInputChangeEmployees}
                  />
                </div>

                <button type="submit">Enviar</button>
              </form>
            </List>
          </Route>

          <Route path="/admin/positions/create" exact>
            <List
              title="Cargos"
              boxName="Adicione um novo cargos"
              backLink="/admin/positions"
            >
              <form onSubmit={e => handlePositionsAddSubmit(e)}>
                <div className="input-content">
                  <label htmlFor="name">Nome</label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleInputChangePosition}
                  />
                </div>
                <button type="submit">Enviar</button>
              </form>
            </List>
          </Route>

          <Route path="/admin/positions/edit/:id" exact>
            <List
              title="Cargos"
              boxName="Edite um cargos"
              backLink="/admin/positions"
            >
              <form onSubmit={e => handlePositionsEditSubmit(e)}>
                <div className="input-content">
                  <label htmlFor="name">Nome</label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={EditPositionState.name}
                    onChange={handleInputChangePosition}
                  />
                </div>
                <button type="submit">Salvar</button>
              </form>
            </List>
          </Route>
        </div>
      </div>
    </>
  )
}

export default Layout
