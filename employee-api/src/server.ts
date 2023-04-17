/**
 * Arquivo responsável por entrar na porta e iniciar a a conexão com Data Base.
 * data: 17/04/23
 * autora: Jana Machado - https://www.linkedin.com/in/janammachado/
 */

import app from "./app";
import { starDataBase } from "./config";

app.listen(3000, async () =>{
  await starDataBase()
  console.log('Server is running!!')
})