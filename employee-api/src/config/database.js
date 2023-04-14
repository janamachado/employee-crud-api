/* eslint-disable no-undef */

/**
 * Arquivo responsável pelas 'connectionStrings' com PostgreSQL e CosmosDB
 * data: 14/04/23
 * autora: Jana Machado - https://www.linkedin.com/in/janammachado/
 */

import { Pool } from 'pg'
import * as dotenv from 'dotenv'

dotenv.config()

/* Conexão com a base de dados */

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

pool.on('error', (err, client)=>{
  console.log(`Unexpected error, client: ${client}, error: ${err}`)
  process.exit(-1)
})

pool.on('connect', ()=>{
  console.log('Database connected successfully')
})

module.exports = {
  query: (text, params) => pool.query(text, params)
}