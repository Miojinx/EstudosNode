import mysql from "mysql2"

const conexao = mysql.createConnection({ //dados necessários para acessar a tabela
    host: "localhost",
    port: "3306",
    user: "root",
    password: "12345678",
    database: "bd_copa"
})

conexao.connect()

export default conexao