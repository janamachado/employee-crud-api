/**
 * Arquivo responsável pelo roteamento da API
 * data: 14/04/23
 * autora: Jana Machado - https://www.linkedin.com/in/janammachado/
 */

import { Router } from "express";
import {createEmployeeController, listEmployeesController, listOneEmployeeController} from "../controllers/employee.controller"

const employeeRoutes = Router()

/* Definindo rotas CRUD para tabela employee */
employeeRoutes.post('', createEmployeeController)
employeeRoutes.get('', listEmployeesController)
employeeRoutes.get('/:id', listOneEmployeeController)

export default employeeRoutes