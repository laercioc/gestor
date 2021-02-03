import express, { Request, Response } from 'express'
import jwt from 'express-jwt'

import User from './../controllers/UserController'
import Positions from './../controllers/PositionsController'
import Employees from './../controllers/EmployeesController'

const Routes = express.Router()

const UserController = new User()
const PositionsController = new Positions()
const EmployeesController = new Employees()


Routes.get('/', (req: Request, resp: Response) => {
  resp.send('Service On')
})

Routes.post('/login', UserController.Login)
Routes.post('/auth', UserController.Auth)

let secret:string = 'my-secret-key'
let algorithms: string[] = ['HS256']

//positions protected routes
Routes.get('/positions', jwt({ secret, algorithms }), PositionsController.Index)
Routes.post('/positions', jwt({ secret, algorithms }), PositionsController.Create)
Routes.put('/positions', jwt({ secret, algorithms }), PositionsController.Update)
Routes.delete('/positions/:id', jwt({ secret, algorithms }), PositionsController.Delete)

//employees protected routes
Routes.get('/employees', jwt({ secret, algorithms }), EmployeesController.Index)
Routes.post('/employees', jwt({ secret, algorithms }), EmployeesController.Create)
Routes.put('/employees', jwt({ secret, algorithms }), EmployeesController.Update)
Routes.delete('/employees/:id', jwt({ secret, algorithms }), EmployeesController.Delete)
export default Routes
