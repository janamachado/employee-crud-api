
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