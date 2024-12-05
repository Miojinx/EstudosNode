import express from 'express' //importando o express
const app = express() //criando a instância do express no app

//mock (termo para mockar dados, ou seja, estrutura basica de daados para teste)

const selecoes = [
    {id:1, selecao:"Brasil", grupo: "G"},
    {id:2, selecao:"Suíça", grupo: "G"},
    {id:3, selecao:"Sérvia", grupo: "G"},
    {id:4, selecao:"Camarões", grupo: "G"}
]

app.get('/', (req, res)=> {     // barra para rota padrão. colocar request e response
    res.send('Curso de node JS')
})

app.get("/selecoes", (req,res) =>{ //devolve todas as seleções
    res.status(200).send(selecoes)
})

export default app