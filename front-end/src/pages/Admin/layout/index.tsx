import React, { FormEventHandler } from 'react'
import Moment from 'moment'
import 'moment/locale/pt-br'
import { Route, Link } from 'react-router-dom'
import List from '../../../components/List'

import IPositions from '../../../interfaces/IPositions'
import './styles.css'

interface IAdmin {
  currentRoute: string

  handleUserLogout: React.MouseEventHandler<HTMLButtonElement>
  handlePositionsAddSubmit: FormEventHandler
  handleInputChangePosition: FormEventHandler
  handlePositionsEditSubmit: FormEventHandler
  DeletePosition: any
  EditPosition: any
  EditPositionState: IPositions

  EmployeesList: string[]
  PositionsList: IPositions[]
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

  EmployeesList
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
