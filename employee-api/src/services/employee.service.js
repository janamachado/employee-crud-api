/**
 * Arquivo responsável pela lógica manipulação dos dados recebidos e enviar para os controllers.
 * data: 15/04/23
 * autora: Jana Machado - https://www.linkedin.com/in/janammachado/
 */

import db from '../config/database'

/* Rota Post para criação de um employee */
const createEmployeeService = async (name, job_role, salary, birth, employee_registration) =>{
  try {
    const createEmployee = await db.query(
      `INSERT INTO employee
      (name, job_role, salary, birth, employee_registration)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      `,
      [name, job_role, salary, birth, employee_registration]
    )
    return createEmployee.rows[0]
  } catch (error) {
    throw new Error(error)
  }
}

/* Rota Get para listagem de todos os employees */
const listEmployeesService = async () =>{
  try {
    const allEmployees = await db.query(
      `SELECT * FROM employee
      ORDER BY name ASC
      `
    )
    return allEmployees.rows
  } catch (error) {
    throw new Error(error)
  }
}

export {createEmployeeService, listEmployeesService}