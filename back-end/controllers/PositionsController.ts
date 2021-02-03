import { Request, Response } from 'express'

import knex from '../database/connection'

class Positions {
  async Index(request: Request, response: Response) {
    const query = await knex('positions')
      .where('status', 'active')
      .orderBy('id', 'desc')

    return response.json(query)
  }

  async Create(request: Request, response: Response) {
    const {name} = request.body

    const insert = await knex('positions').insert({name})

    const query = await knex('positions')
      .where('id', insert[0])

    return response.json(query[0])
  }

  async Update(request: Request, response: Response) {
    const {id, name} = request.body

    const update = await knex('positions').where('id', id).update({
      name
    })

    const query = await knex('positions')
      .where('id', id)

    return response.json(query[0])
  }

  async Delete(request: Request, response: Response) {
    const { id } = request.params

    await knex('positions').where('id', id).delete()

    return response.json({success: true, message: 'Cargo deletado'})
  }
}

export default Positions