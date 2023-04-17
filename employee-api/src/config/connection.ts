/**
 * Arquivo responsável conectar com o Banco de Dados.
 * data: 17/04/23
 * autora: Jana Machado - https://www.linkedin.com/in/janammachado/
 */

import client from "./database"

const starDataBase = async (): Promise<void> =>{
  await client.connect()
  console.log('Database connected successfully!!')
}

export default starDataBase