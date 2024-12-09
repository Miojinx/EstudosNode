import express from 'express' //importando o express 
import routes from './routes'
const app = express() //criando a instância do express no app

app.use(express.json())//indicar para o express ler o body com json

//usar o router
app.use(routes)

export default app