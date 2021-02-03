import React, { FormEvent, ChangeEvent, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  useDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook
} from 'react-redux'
import { notify } from 'react-notify-toast'
import IState from '../../redux/IStore'

import Layout from './layout'
import API from '../../services/api'
import IPositions from '../../interfaces/IPositions'
import IEmployees from '../../interfaces/IEmployees'

const Admin: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const useSelector: TypedUseSelectorHook<IState> = useReduxSelector
  const state = useSelector(state => state)

  const [postions, setPositions] = useState<IPositions[]>([])
  const [employees, setEmployees] = useState<IEmployees[]>([])

  const [formDataPositions, setFormDataPositions] = useState<IPositions>({
    name: ''
  })

  const [formDataEmployees, setFormDataEmployees] = useState<IEmployees>({
    name: '',
    surname: '',
    birthday: '',
    salary: 0,
    office_id: 0
  })

  const [EditPositionState, setEditPositionState] = useState<IPositions>({
    id: 0,
    name: '',
    created_at: ''
  })

  const [EditEmployeesState, setEditEmployeesState] = useState<IEmployees>({
    id: 0,
    name: '',
    surname: '',
    birthday: '',
    salary: 0,
    position: '',
    office_id: 0,
    created_at: ''
  })

  useEffect(() => {
    if (!state.user.logged) {
      history.push('/')
    }

    async function loadData() {
      // get positions list
      const positions = await API.get('/positions', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })

      setPositions(positions.data)

      // get employees list
      const employees = await API.get('/employees', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })

      setEmployees(employees.data)
    }

    loadData()
  }, [])

  function handleUserLogout() {
    localStorage.removeItem('token')
    dispatch({ type: 'SET_LOGOUT' })
    dispatch({ type: 'SET_LOGGED_TOKEN', token: '' })

    history.push('/')
  }

  async function DeletePosition(id: number) {
    const response = await API.delete(`/positions/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

    if (!response.data.error) {
      setPositions(prevState => prevState.filter(item => item.id !== id))
      return notify.show('Cargo excluído com sucesso!', 'success', 5000)
    }
  }

  async function handlePositionsAddSubmit(e: FormEvent) {
    e.preventDefault()

    const response = await API.post('/positions', formDataPositions, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

    if (response.data.error) {
      return notify.show(response.data.message, 'error', 5000)
    } else {
      setPositions(prevState => [response.data, ...prevState])
      history.push('/admin/positions')

      return notify.show('Cargo adicionado com sucesso!', 'success', 5000)
    }
  }

  async function handlePositionsEditSubmit(e: FormEvent) {
    e.preventDefault()

    const response = await API.put(
      '/positions',
      {
        id: EditPositionState.id,
        name: formDataPositions.name
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    )

    if (response.data.error) {
      return notify.show(response.data.message, 'error', 5000)
    } else {
      setPositions(prevState =>
        prevState.map(item =>
          item.id === EditPositionState.id ? response.data : item
        )
      )
      history.push('/admin/positions')

      return notify.show('Cargo editado com sucesso!', 'success', 5000)
    }
  }

  function EditPosition(id: number) {
    const data = postions.filter(item => item.id === id)
    setEditPositionState(data[0])
    setFormDataPositions(data[0])

    history.push(`/admin/positions/edit/${id}`)
  }

  function handleInputChangePosition(e: ChangeEvent<HTMLInputElement>) {
    setFormDataPositions({
      ...formDataPositions,
      [e.target.name]: e.target.value
    })
  }

  // employees
  async function DeleteEmployees(id: number) {
    const response = await API.delete(`/employees/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

    if (!response.data.error) {
      setEmployees(prevState => prevState.filter(item => item.id !== id))
      return notify.show('Funcionário excluído com sucesso!', 'success', 5000)
    }
  }

  async function handleEmployeesAddSubmit(e: FormEvent) {
    e.preventDefault()

    const response = await API.post('/employees', formDataEmployees, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

    if (response.data.error) {
      return notify.show(response.data.message, 'error', 5000)
    } else {
      setEmployees(prevState => [response.data, ...prevState])
      history.push('/admin/employees')

      return notify.show(
        'Funcionários adicionado com sucesso!',
        'success',
        5000
      )
    }
  }

  async function handleEmployeesEditSubmit(e: FormEvent) {
    e.preventDefault()

    const response = await API.put(
      '/employees',
      {
        id: EditEmployeesState.id,
        ...formDataEmployees
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    )

    if (response.data.error) {
      return notify.show(response.data.message, 'error', 5000)
    } else {
      setEmployees(prevState =>
        prevState.map(item =>
          item.id === EditEmployeesState.id ? response.data : item
        )
      )
      history.push('/admin/employees')

      return notify.show('Funcionário editado com sucesso!', 'success', 5000)
    }
  }

  function EditEmployees(id: number) {
    const data = employees.filter(item => item.id === id)
    setEditEmployeesState(data[0])
    setFormDataEmployees(data[0])

    history.push(`/admin/employees/edit/${id}`)
  }

  function handleInputChangeEmployees(e: ChangeEvent<HTMLInputElement>) {
    setFormDataEmployees({
      ...formDataEmployees,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Layout
      // general
      currentRoute={location.pathname}
      handleUserLogout={handleUserLogout}
      // positions
      PositionsList={postions}
      handlePositionsAddSubmit={handlePositionsAddSubmit}
      handleInputChangePosition={handleInputChangePosition}
      handlePositionsEditSubmit={handlePositionsEditSubmit}
      DeletePosition={DeletePosition}
      EditPosition={EditPosition}
      EditPositionState={EditPositionState}
      // employees
      EmployeesList={employees}
      handleEmployeesAddSubmit={handleEmployeesAddSubmit}
      handleInputChangeEmployees={handleInputChangeEmployees}
      handleEmployeesEditSubmit={handleEmployeesEditSubmit}
      DeleteEmployees={DeleteEmployees}
      EditEmployees={EditEmployees}
      EditEmployeesState={EditEmployeesState}
    />
  )
}

export default Admin
