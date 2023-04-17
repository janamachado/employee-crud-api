/**
 * Arquivo responsável conectar com o Banco de Dados, fazer a manipulação dos dados recebidos e retornar para os controllers.
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

/* Rota Get para listagem de TODOS os employees */
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

/* Rota Get para listagem de apenas UM employee */
const listOneEmployeeService = async (id) =>{
  try {
    const employee = await db.query(
      `
      SELECT * FROM employee WHERE employee_id = $1
      `, [id]
      )
      return employee.rows[0]
  } catch (error) {
    throw new Error(error)
  }
}

export {createEmployeeService, listEmployeesService, listOneEmployeeService}