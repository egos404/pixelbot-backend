const db = require('../db'); 

module.exports = {
  async listar() {
    const { rows } = await db.query('SELECT * FROM jogos ORDER BY id');
    return rows;
  },

  async buscarPorId(id) {
    const { rows } = await db.query('SELECT * FROM jogos WHERE id = $1', [id]);
    return rows[0];
  },

  async criar(dados) {
 
    if (!dados.nome || !dados.plataforma || !dados.status)
      throw new Error("Preencha nome, plataforma e status.");
    const { rows } = await db.query(
      'INSERT INTO jogos (nome, plataforma, status) VALUES ($1, $2, $3) RETURNING *',
      [dados.nome, dados.plataforma, dados.status]
    );
    return rows[0];
  },

  async atualizar(id, dados) {
    if (!dados.nome || !dados.plataforma || !dados.status)
      throw new Error("Preencha nome, plataforma e status.");
    const { rows } = await db.query(
      'UPDATE jogos SET nome=$1, plataforma=$2, status=$3 WHERE id=$4 RETURNING *',
      [dados.nome, dados.plataforma, dados.status, id]
    );
    return rows[0];
  },

  async remover(id) {
    await db.query('DELETE FROM jogos WHERE id=$1', [id]);
  }
};
