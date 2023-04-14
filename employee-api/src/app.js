
/**
 * Arquivo responsável por conectar com o arquivo server.js
 * data: 14/04/23
 * autora: Jana Machado - https://www.linkedin.com/in/janammachado/
 */

import * as dotenv from 'dotenv'
import cors from 'cors'
import express from "express";
import index from './routes/index'
// import employeeRoutes from './routes/employee.routes'

dotenv.config()

const app = express();
app.use(express.json());
app.use(cors())

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000

app.use('/api/', index)
    

app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`)
});

export default app