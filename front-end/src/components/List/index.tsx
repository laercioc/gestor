import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

interface IList {
  title: string
  createLink: string
}

const List: React.FC<IList> = ({ title, createLink }) => {
  return (
    <div className="list-container">
      <div className="header"></div>
      <div className="header-actions">
        <div className="title">{title}</div>

        <div className="btns">
          <Link to={createLink}>
            <button>Adicionar novo</button>
          </Link>
        </div>
      </div>

      <div className="content">
        <div className="title">Lista</div>

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
      </div>
    </div>
  )
}

export default List
