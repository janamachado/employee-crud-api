/* eslint-disable no-unused-vars */
/**
 * Arquivo responsável pela lógica de execução do CRUD de um Employee
 * data: 14/04/23
 * autora: Jana Machado - https://www.linkedin.com/in/janammachado/
 */

import { createEmployeeService } from '../services/employee.service'

const createEmployeeController = async (req, res) =>{
  const { name, job_role, salary, birth, employee_registration } = req.body
  try {
    const createdEmployee = await createEmployeeService(name, job_role, salary, birth, employee_registration)
    return res.status(200).json({
      message: "Employee created succesfully",
      employee: createdEmployee
    })
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}

export {createEmployeeController}