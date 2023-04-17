/* eslint-disable no-unused-vars */
/**
 * Arquivo responsável por receber dados, enviar para o service e retornar os dados manipulados.
 * data: 14/04/23
 * autora: Jana Machado - https://www.linkedin.com/in/janammachado/
 */

import { createEmployeeService, listEmployeesService, listOneEmployeeService } from '../services/employee.service'

/* Rota Post para criação de um employee */
const createEmployeeController = async (req, res) =>{
  const { name, job_role, salary, birth, employee_registration } = req.body
  try {
    const createdEmployee = await createEmployeeService(name, job_role, salary, birth, employee_registration)
    return res.status(201).json({
      message: "Employee created succesfully",
      employee: createdEmployee
    })
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}

/* Rota Get para listagem de todos os employees */
const listEmployeesController = async (req, res) =>{
  try {
    const allEmployees = await listEmployeesService()
    return res.status(200).json({
      message: "All employees:",
      employees: allEmployees
    })
  } catch (error) {
    return res.status(404).json({
      message: error.message
    })
  }
}

/* Rota Get para listagem de apenas um employee */
const listOneEmployeeController = async (req, res) =>{
  const {id} = req.params
  try {
    const employee = await listOneEmployeeService(id)
    return res.status(200).json({employee: employee})

  } catch (error) {
    return res.status(404).json({
      message: error.message
    })
  }
}

export {createEmployeeController, listEmployeesController, listOneEmployeeController}