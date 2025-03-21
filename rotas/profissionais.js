const { Router } = require("express")
const { getProfissionais, getProfissional, postProfissional, deleteProfissional, patchProfissional } = require("../controladores/profissionais")

const router = Router()

router.get('/', getProfissionais)
router.get('/:id', getProfissional)

router.post('/', postProfissional)

router.delete('/:id', deleteProfissional)

router.patch('/:id', patchProfissional)

module.exports = router