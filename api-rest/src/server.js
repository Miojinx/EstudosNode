import app from "./app.js"

const PORT = process.env.port || 3000 //definir a porta

app.listen(PORT, () => { //escutar a porta
    console.log(`Servidor rodando no endereço: http://localhost:${PORT}`)
})

