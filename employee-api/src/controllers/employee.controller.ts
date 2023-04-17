/* eslint-disable no-unused-vars */
/**
 * Arquivo responsável por receber dados, enviar para o service e retornar os dados manipulados.
 * data: 14/04/23
 * autora: Jana Machado - https://www.linkedin.com/in/janammachado/
 */
import { Request, Response } from "express";

import { createEmployeeService, deleteEmployeeService, listEmployeesService, listOneEmployeeService, updateEmployeeService } from '../services/employee.service'

/* Rota Post para criação de um employee */
const createEmployeeController = async (req: Request, res: Response) =>{
  const { name, job_role, salary, birth, employee_registration } = req.body
  try {
    const createdEmployee = await createEmployeeService({name, job_role, salary, birth, employee_registration})
    return res.status(201).json({
      message: "Employee created succesfully",
      employee: createdEmployee
    })
  } catch (error) {
    return res.status(400).json({
      message: "Ocorreu algum erro ao enviar a requisição",
      erro: error
    })
  }
}

/* Rota Get para listagem de todos os employees */
const listEmployeesController = async (req: Request, res: Response) =>{
  try {
    const allEmployees = await listEmployeesService()
    return res.status(200).json({
      message: "All employees:",
      employees: allEmployees
    })
  } catch (error) {
    return res.status(404).json({
      message: "Ocorreu algum erro ao enviar a requisição",
      erro: error
    })
  }
}

/* Rota Get para listagem de apenas um employee */
const listOneEmployeeController = async (req: Request, res: Response) =>{
  const {id} = req.params
  try {
    const employee = await listOneEmployeeService(id)
    return res.status(200).json({employee: employee})

  } catch (error) {
    return res.status(404).json({
      message: "Ocorreu algum erro ao enviar a requisição",
      erro: error
    })
  }
}

/* Rota PUT para atualizar os dados de um employee */
const updateEmployeeController = async (req: Request, res: Response) =>{
  const {id} = req.params
  try {
    const { name, job_role, salary, birth, employee_registration } = req.body
    const updatedEmployee = await updateEmployeeService(id, {name, job_role, salary, birth, employee_registration})
    return res.status(200).json({
      message: "Employee updated succesfully",
      employee_updated: updatedEmployee
    })
  } catch (error) {
    return res.status(404).json({
      message: "Ocorreu algum erro ao enviar a requisição",
      erro: error
    })
  }
}

/* Rota DELETE para deletar um employee do Banco de Dados. */
const deleteEmployeeController = async (req: Request, res: Response) =>{
  const {id} = req.params
  try {
    await deleteEmployeeService(id)
    return res.status(204)
  } catch (error) {
    return res.status(404).json({
      message: "Ocorreu algum erro",
      erro: error
    })
  }
}

export {createEmployeeController, listEmployeesController, listOneEmployeeController, updateEmployeeController, deleteEmployeeController}