/**
 * Arquivo responsável conectar com o Banco de Dados, fazer a manipulação dos dados recebidos e retornar para os controllers.
 * data: 15/04/23
 * autora: Jana Machado - https://www.linkedin.com/in/janammachado/
 */

import db from '../config/database'
import { IEmployee } from '../interfaces/employee.interfaces'

/* Rota Post para criação de um employee */
const createEmployeeService = async ({name, job_role, salary, birth, employee_registration}: IEmployee): Promise<IEmployee> =>{
  try {
    const createEmployee = await db.query(
      `
        INSERT INTO
          employee
          (name, job_role, salary, birth, employee_registration)
        VALUES
          ($1, $2, $3, $4, $5)
        RETURNING *
      `,
      [name, job_role, salary, birth, employee_registration]
    )
    return createEmployee.rows[0]
  } catch (error: any) {
    throw new Error(error)
  }
}

/* Rota Get para listagem de TODOS os employees */
const listEmployeesService = async (): Promise<Array<IEmployee>> =>{
  try {
    const allEmployees = await db.query(
      `
        SELECT * FROM
          employee
        ORDER BY
          name ASC
      `
    )
    return allEmployees.rows
  } catch (error: any) {
    throw new Error(error)
  }
}

/* Rota Get para listagem de apenas UM employee */
const listOneEmployeeService = async (id: string): Promise<IEmployee> =>{
  try {
    const employee = await db.query(
      `
        SELECT * FROM
          employee
        WHERE
          employee_id = $1
      `, [id]
      )
      return employee.rows[0]
  } catch (error: any) {
    throw new Error(error)
  }
}

/* Rota PATCH para atualizar um ou mais dados de um employee */
const updateEmployeeService = async (id: string, { name, job_role, salary, birth, employee_registration }: IEmployee): Promise<IEmployee> =>{
  try {
    const updatedEmployee = await db.query(
      `
        UPDATE employee SET
          name = $1,
          job_role = $2,
          salary = $3,
          birth = $4,
          employee_registration = $5
        WHERE
          employee_id = $6
        RETURNING *
      `,
      [name, job_role, salary, birth, employee_registration, id]
    )
    return updatedEmployee.rows[0]
  } catch (error: any) {
    throw new Error(error)
  }
}

/* Rota DELETE para deletar um employee do Banco de Dados. */
const deleteEmployeeService = async (id: string): Promise<void> =>{
  try {
    await db.query(
    `
      DELETE FROM 
        employee
      WHERE
        employee_id = $1
    `,
    [id]
    )
  } catch (error: any) {
    throw new Error
  }
}

export {createEmployeeService, listEmployeesService, listOneEmployeeService, updateEmployeeService, deleteEmployeeService}