import app from "./src/app.js"

const PORT = 3000 //definir a porta

app.listen(PORT, () => { //escutar a porta
    console.log(`Servidor rodando no endereço: http://localhost:${PORT}`)
})

