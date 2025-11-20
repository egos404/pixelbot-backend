// src/db/index.js
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Função helper para queries (sempre parametrizadas)
async function query(text, params) {
  const result = await pool.query(text, params);
  return result;
}

// Fecha conexões (usar ao encerrar app)
async function close() {
  await pool.end();
}

module.exports = { query, close };