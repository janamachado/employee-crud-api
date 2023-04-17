/**
 * Arquivo responsável pelas 'connectionStrings' com PostgreSQL e CosmosDB
 * data: 14/04/23
 * autora: Jana Machado - https://www.linkedin.com/in/janammachado/
 */

import { Client } from 'pg'
import 'dotenv/config'

const client: Client = new Client({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB
})

export default client
