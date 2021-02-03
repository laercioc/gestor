import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import knex from '../database/connection'

class User {
  async Login(request: Request, response: Response) {
    const { username, password } = request.body

    const query = await knex('users')
      .where('username', String(username))
      .where('password', String(password))

    if (query.length > 0) {
      const token = jwt.sign({ id: query[0].id }, 'my-secret-key', {
        expiresIn: 3600
      })

      return response.json({ success: true, token: token })
    } else {
      return response.json({ error: true, message: 'Usuário não encontrado' })
    }
  }

  async Auth(request: Request, response: Response) {
    const { token } = request.body

    try {
      const payload = <any>jwt.verify(token, 'my-secret-key')
      const newToken = await jwt.sign({ id: payload.id }, 'my-secret-key', {
        expiresIn: 3600
      })

      return response.status(200).json({ success: true, token: newToken })
    } catch (err) {
      return response
        .status(200)
        .json({ error: true, message: 'Token expirado!' })
    }
  }
}

export default User
