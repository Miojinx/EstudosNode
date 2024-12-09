import { consulta } from "../database/conexao"

class SelecaoRepository {
    //implementar um método para cada uma das ações dentro do controller - CRUD
    findAll() {
        const sql = "SELECT * FROM selecoes;"
        return consulta(sql, "Não foi possível localizar!")
    }
    findById(id) {
        const sql = `SELECT * FROM selecoes where id = ?;`
        return consulta(sql, id, "Não foi possível localizar!")
    }
    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?"
        return consulta(sql, selecao, "Não foi possível cadastrar!")
    }
    update(selecao, id) {
        const sql = `Update selecoes SET ? where id = ?`
        return consulta(sql, [selecao, id], "Não foi possível atualizar!")
    }
    delete(id) {
        const sql = `DELETE FROM selecoes where id = ?;`
        return consulta(sql, id, "Não foi possível deletar!")
    }
}

export default new SelecaoRepository()