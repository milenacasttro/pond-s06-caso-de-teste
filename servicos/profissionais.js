const fs = require("fs")

function getTodosProfissionais() {
    return JSON.parse(fs.readFileSync("profissionais.json"))
}

function getProfissionalPorId(id) {
    const profissionais = JSON.parse(fs.readFileSync("profissionais.json"));
    return profissionais.find(profissional => profissional.id === id) || null;
}

function insereProfissional(profissionalNovo) {
    const profissionais = JSON.parse(fs.readFileSync("profissionais.json"))
    const novaListaDeProfissionais = [...profissionais, profissionalNovo]
    fs.writeFileSync("profissionais.json", JSON.stringify(novaListaDeProfissionais))

}

function modificaProfissional(modificacoes, id) {
    let profissionaisAtuais = JSON.parse(fs.readFileSync("profissionais.json"))
    const indiceModificado = profissionaisAtuais.findIndex( profissional => profissional.id === id)

    const conteudoMudado = { ...profissionaisAtuais[indiceModificado], ...modificacoes }

    profissionaisAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("profissionais.json", JSON.stringify(profissionaisAtuais))
}

function removeProfissionalPorId(id) {
    const profissionais = JSON.parse(fs.readFileSync("profissionais.json"))
    const novaListaRemovido = profissionais.filter(profissional => profissional.id !== id)
    fs.writeFileSync("profissionais.json", JSON.stringify(novaListaRemovido))

}

module.exports = {
    getTodosProfissionais, getProfissionalPorId, insereProfissional, modificaProfissional, removeProfissionalPorId
}