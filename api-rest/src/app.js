import express from 'express' //importando o express 
import conexao from '../infra/conexao.js'
const app = express() //criando a instância do express no app

app.use(express.json())//indicar para o express ler o body com json

function buscarSelecaoPorID(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

//pra cada posição da lista, verifica se o ID bate e depois retorna a posição
function buscarIndexSeleção(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}


//ROTAS
app.get("/selecoes", (req, res) => { //devolve todas as seleções
    //res.status(200).send(selecoes)
    const sql = "SELECT * FROM selecoes;"
    conexao.query(sql, async(error, result) => {
            try {
                res.status(200).json(result)
            } catch {
                res.status(404).json(error)
            }
        })
})

app.get("/selecoes/:id", (req, res) => {
    //res.json(buscarSelecaoPorID(req.params.id))resposta em json chamando a função que devolve o id
    const sql = `SELECT * FROM selecoes where id = ${req.params.id};`
    conexao.query(sql, async(error, result) => {
        const linha = result[0] //para retornar apenas 1
            try {
                res.status(200).json(linha)
            } catch {
                res.status(404).json(error)
            }
        })
})

app.post("/selecoes", (req, res) => {
    const selecao = req.body
    const sql = "INSERT INTO selecoes SET ?"
    conexao.query(sql,selecao, async(error, result) => {
            try {
                res.status(201).json(result)
            } catch {
                res.status(400).json(error)
            }
        })
})

app.put("/selecoes/:id", (req, res) => {
    const selecao = req.body
    const sql = `Update selecoes SET ? where id = ?`
    conexao.query(sql, [selecao, req.params.id], async(error, result) => {
            try {
                res.status(200).json(result)
            } catch {
                res.status(404).json(error)
            }
        })
})

app.delete("/selecoes/:id", (req, res) => {
    const sql = `DELETE FROM selecoes where id = ${req.params.id};`
    conexao.query(sql, async(error, result) => {
            try {
                res.status(200).json(result)
            } catch {
                res.status(404).json(error)
            }
        })
})

export default app