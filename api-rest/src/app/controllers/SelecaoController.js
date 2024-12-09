import conexao from '../database/conexao'

class SelecaoController {

    index(req, res) { //devolve todas as seleções
        const sql = "SELECT * FROM selecoes;"
        conexao.query(sql, async (error, result) => {
            try {
                res.status(200).json(result)
            } catch {
                res.status(404).json(error)
            }
        })
    }
    show(req, res) {
        const sql = `SELECT * FROM selecoes where id = ${req.params.id};`
        conexao.query(sql, async (error, result) => {
            const linha = result[0] //para retornar apenas 1
            try {
                res.status(200).json(linha)
            } catch {
                res.status(404).json(error)
            }
        })
    }
    store(req, res) {
        const selecao = req.body
        const sql = "INSERT INTO selecoes SET ?"
        conexao.query(sql, selecao, async (error, result) => {
            try {
                res.status(201).json(result)
            } catch {
                res.status(400).json(error)
            }
        })
    }
    update(req, res) {
        const selecao = req.body
        const sql = `Update selecoes SET ? where id = ?`
        conexao.query(sql, [selecao, req.params.id], async (error, result) => {
            try {
                res.status(200).json(result)
            } catch {
                res.status(404).json(error)
            }
        })
    }
    delete(req, res) {
        const sql = `DELETE FROM selecoes where id = ${req.params.id};`
        conexao.query(sql, async (error, result) => {
            try {
                res.status(200).json(result)
            } catch {
                res.status(404).json(error)
            }
        })
    }

}
export default new SelecaoController //para exportar a classe é preciso criar a instância. Singleton(única)