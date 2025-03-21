const { getTodosProfissionais, getProfissionalPorId, insereProfissional, removeProfissionalPorId, modificaProfissional } = require("../servicos/Profissionais")

function getProfissionais(req, res) {
    try {
        const Profissionais = getTodosProfissionais()
        res.send(Profissionais)
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}

function getProfissional(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const Profissional = getProfissionalPorId(id)
            res.send(Profissional)
        } else {
            res.status(422)
            res.send("ID inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postProfissional(req, res) {
    try {
        const { id, nome, email, ocupacao, ativo } = req.body;
        
        if (!id || !nome || !email || !ocupacao || ativo === undefined) {
            res.status(422).send("Todos os campos são obrigatórios: id, nome, email, ocupacao, ativo.");
            return;
        }

        const dataCadastro = new Date().toISOString(); // Gera a data no formato ISO

        const ProfissionalNovo = { id, nome, email, ocupacao, ativo, dataCadastro };

        insereProfissional(ProfissionalNovo);
        res.status(201).send("Profissional inserido com sucesso.");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function patchProfissional(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const body = req.body
            modificaProfissional(body, id)
            res.send("Item modificado com sucesso")
        } else {
            res.status(422)
            res.send("ID inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteProfissional(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const profissional = getProfissionalPorId(id);
            if (profissional) {
                removeProfissionalPorId(id);
                res.status(200).send("Profissional removido com sucesso");
            } else {
                res.status(404).send("Profissional não encontrado");
            }
        } else {
            res.status(422).send("ID inválido");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getProfissionais, getProfissional, postProfissional, patchProfissional, deleteProfissional
}