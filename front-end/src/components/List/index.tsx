import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

interface IList {
  title: string
  boxName: string
  createLink?: string
}

const List: React.FC<IList> = ({ title, createLink, boxName, children }) => {
  return (
    <div className="list-container">
      <div className="header"></div>
      <div className="header-actions">
        <div className="title">{title}</div>

        <div className="btns">
          {createLink && (
            <Link to={createLink}>
              <button>Adicionar novo</button>
            </Link>
          )}
        </div>
      </div>

      <div className="content">
        <div className="title">{boxName}</div>

        {children}
      </div>
    </div>
  )
}

export default List
