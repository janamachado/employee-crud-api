/**
 * Arquivo responsável pelo roteamento da API
 * data: 14/04/23
 * autora: Jana Machado - https://www.linkedin.com/in/janammachado/
 */

import { Router } from "express";
import {createEmployeeController} from "../controllers/employee.controller"

const employeeRoutes = Router()

/* Definindo rotas CRUD para tabela employee */
employeeRoutes.post('', createEmployeeController)

export default employeeRoutes