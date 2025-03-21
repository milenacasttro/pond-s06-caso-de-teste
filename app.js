const express = require("express")
const rotaProfissional= require("./rotas/profissionais")
const app = express()

app.use(express.json())
app.use('/profissionais', rotaProfissional)

const port = 8000

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})