import mysql from "mysql2"

const conexao = mysql.createConnection({ //dados necessários para acessar a tabela
    host: "localhost",
    port: "3306",
    user: "root",
    password: "12345678",
    database: "bd_copa"
})

conexao.connect()


/**
 * Executa um código sql com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string=id | [selecao,id]} valores a serem passados para o sql
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns retorna objeto da promisse
 */
export const consulta = (sql, valores='', mensagemReject)=>{
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (error, result) => {
            if (error) return reject(mensagemReject)
            //fazer o parse dos resultados
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
}

export default conexao