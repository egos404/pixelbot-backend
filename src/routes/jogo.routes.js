const express = require('express');
const controller = require('../controller/jogo.controller');

const router = express.Router();

router.get('/', controller.listarJogos);
router.get('/:id', controller.buscarJogo);
router.post('/', controller.criarJogo);
router.put('/:id', controller.atualizarJogo);
router.delete('/:id', controller.removerJogo);

module.exports = router;
