import express from 'express' //importando o express
const app = express() //criando a instância do express no app

app.use(express.json())//indicar para o express ler o body com json

//mock (termo para mockar dados, ou seja, estrutura basica de daados para teste)

const selecoes = [
    { id: 1, selecao: "Brasil", grupo: "G" },
    { id: 2, selecao: "Suíça", grupo: "G" },
    { id: 3, selecao: "Sérvia", grupo: "G" },
    { id: 4, selecao: "Camarões", grupo: "G" }
]

function buscarSelecaoPorID(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

//pra cada posição da lista, verifica se o ID bate e depois retorna a posição
function buscarIndexSeleção(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}

app.get('/', (req, res) => {     // barra para rota padrão. colocar request e response
    res.send('Curso de node JS')
})

app.get("/selecoes", (req, res) => { //devolve todas as seleções
    res.status(200).send(selecoes)
})

app.get("/selecoes/:id", (req, res) => {
    res.json(buscarSelecaoPorID(req.params.id)) //resposta em json chamando a função que devolve o id
})

app.post("/selecoes", (req, res) => {
    selecoes.push(req.body) //corpo da requisição (conteúdo de fato)
    res.status(201).send("Seleção cadastrada com sucesso") //201: criação
})

app.put("/selecoes/:id", (req, res) => {
    let index = buscarIndexSeleção(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo = req.body.grupo
    res.json(selecoes[index])
})

app.delete("/selecoes/:id", (req, res) => {
    let index = buscarIndexSeleção(req.params.id)
    selecoes.splice(index, 1) //corta apenas 1 elemento da lista
    res.send(`Seleção com id ${req.params.id} excluída com sucesso`)
})

export default app