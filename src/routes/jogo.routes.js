// src/routes/jogo.routes.js
const express = require('express');
const controller = require('../controller/jogo.controller');

const router = express.Router();

// Cuidado: prefixo será incluído via app.use
router.get('/', controller.listarJogos);
router.get('/:id', controller.buscarJogo);
router.post('/', controller.criarJogo);
router.put('/:id', controller.atualizarJogo);
router.delete('/:id', controller.removerJogo);

module.exports = router;
