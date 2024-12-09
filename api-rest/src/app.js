import express from 'express' //importando o express 
import SelecaoController from './app/controllers/SelecaoController.js'

const app = express() //criando a instância do express no app
app.use(express.json())//indicar para o express ler o body com json

//ROTAS
app.get("/selecoes", SelecaoController.index)
app.get("/selecoes/:id", SelecaoController.show)
app.post("/selecoes", SelecaoController.store)
app.put("/selecoes/:id", SelecaoController.update)
app.delete("/selecoes/:id", SelecaoController.delete)

export default app