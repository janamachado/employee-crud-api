/* eslint-disable no-unused-vars */
/**
 * Arquivo responsável pela lógica de execução do CRUD de um Employee
 * data: 14/04/23
 * autora: Jana Machado - https://www.linkedin.com/in/janammachado/
 */

import db from '../config/database'

const createEmployeeController = async (req, res) =>{
  const { name, job_role, salary, birth, employee_registration } = req.body
  const { rows } = await db.query(
    "INSERT INTO employee (name, job_role, salary, birth, employee_registration) VALUES ($1, $2, $3, $4, $5 )",
    [name, job_role, salary, birth, employee_registration]
  )

  res.status(200).send({
    message: "Employee created succesfully",
    body: {
      employee: { name, job_role, salary, birth, employee_registration }
    }
  })
}

export {createEmployeeController}