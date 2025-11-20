// src/controller/jogo.controller.js
const Jogo = require('../model/jogo.model');

async function listarJogos(req, res) {
  try {
    const jogos = await Jogo.listar();
    res.json(jogos);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
}

async function buscarJogo(req, res) {
  try {
    const jogo = await Jogo.buscarPorId(req.params.id);
    if (!jogo) return res.status(404).json({ erro: 'Jogo não encontrado' });
    res.json(jogo);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
}

async function criarJogo(req, res) {
  try {
    const novo = await Jogo.criar(req.body);
    res.status(201).json(novo);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
}

async function atualizarJogo(req, res) {
  try {
    const atualizado = await Jogo.atualizar(req.params.id, req.body);
    if (!atualizado) return res.status(404).json({ erro: 'Jogo não encontrado' });
    res.json(atualizado);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
}

async function removerJogo(req, res) {
  try {
    await Jogo.remover(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
}

module.exports = {
  listarJogos,
  buscarJogo,
  criarJogo,
  atualizarJogo,
  removerJogo,
};
