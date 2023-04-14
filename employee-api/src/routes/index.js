/* eslint-disable no-undef */
/**
 * Arquivo responsável por chamar a API na aplicação no Back-End
 * data: 14/04/23
 * autora: Jana Machado - https://www.linkedin.com/in/janammachado/
 */

import { Router } from "express"

const index = Router()


index.get('', (req, res)=>{
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vinda(o) a API Node.js + PostgreSQL + Azure',
    version: '1.0.0'
  })
})

export default index