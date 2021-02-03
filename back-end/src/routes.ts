import express, { Request, Response } from 'express'

import User from './../controllers/UserController'

const Routes = express.Router()

const UserController = new User()

Routes.get('/', (req: Request, resp: Response) => {
  resp.send('Service On')
})

Routes.post('/login', UserController.Login)
Routes.post('/auth', UserController.Auth)

export default Routes
