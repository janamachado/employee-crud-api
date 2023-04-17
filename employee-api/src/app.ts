/**
 * Arquivo responsável por conectar com o arquivo server.js
 * data: 14/04/23
 * autora: Jana Machado - https://www.linkedin.com/in/janammachado/
 */

import express, { Application } from 'express'
import employeeRoutes from './routes/employee.routes';

const app: Application = express()
app.use(express.json())

app.use('/employees', employeeRoutes)

export default app