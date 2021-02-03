import { Request, Response } from 'express'

import knex from '../database/connection'

class Employees {
  async Index(request: Request, response: Response) {
    const query = await knex('employees')
      .join('positions', 'positions.id', 'employees.office_id')
      .where('employees.status', 'active')
      .orderBy('employees.id', 'desc')
      .select('employees.*','positions.name as position')

    return response.json(query)
  }

  async Create(request: Request, response: Response) {
    const {name, surname, birthday, salary, office_id} = request.body

    const insert = await knex('employees').insert({name, surname, birthday, salary, office_id})

    const query = await knex('employees')
      .join('positions', 'positions.id', 'employees.office_id')
      .where('employees.status', 'active')
      .where('employees.id', insert[0])
      .orderBy('employees.id', 'desc')
      .select('employees.*','positions.name as position')

    return response.json(query[0])
  }

  async Update(request: Request, response: Response) {
    const {id, name, surname, birthday, salary, office_id} = request.body

    const update = await knex('employees').where('id', id).update({
      name, surname, birthday, salary, office_id
    })

    const query = await knex('employees')
      .join('positions', 'positions.id', 'employees.office_id')
      .where('employees.status', 'active')
      .where('employees.id', id)
      .orderBy('employees.id', 'desc')
      .select('employees.*','positions.name as position')

    return response.json(query[0])
  }

  async Delete(request: Request, response: Response) {
    const { id } = request.params

    await knex('employees').where('id', id).delete()

    return response.json({success: true, message: 'Funcionário deletado'})
  }
}

export default Employees