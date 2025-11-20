// src/model/jogo.model.js
const db = require('../db');

async function listar() {
  const { rows } = await db.query('SELECT * FROM jogo ORDER BY id');
  return rows;
}

async function buscarPorId(id) {
  const { rows } = await db.query('SELECT * FROM jogo WHERE id = $1', [id]);
  return rows[0];
}

async function criar({ titulo, plataforma, status }) {
  const allowedStatus = ['Nunca joguei', 'Jogando', 'Zerado'];
  if (!allowedStatus.includes(status)) throw new Error('Status inválido!');
  const { rows } = await db.query(
    `INSERT INTO jogo (titulo, plataforma, status)
     VALUES ($1, $2, $3) RETURNING *`,
    [titulo, plataforma, status]
  );
  return rows[0];
}

async function atualizar(id, { titulo, plataforma, status }) {
  const allowedStatus = ['Nunca joguei', 'Jogando', 'Zerado'];
  if (!allowedStatus.includes(status)) throw new Error('Status inválido!');
  const { rows } = await db.query(
    `UPDATE jogo SET titulo=$1, plataforma=$2, status=$3 WHERE id=$4 RETURNING *`,
    [titulo, plataforma, status, id]
  );
  return rows[0];
}

async function remover(id) {
  await db.query('DELETE FROM jogo WHERE id=$1', [id]);
}

module.exports = { listar, buscarPorId, criar, atualizar, remover };
