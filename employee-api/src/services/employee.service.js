

import db from '../config/database'

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

export {createEmployeeService}