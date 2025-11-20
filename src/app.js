const express = require('express');
const cors = require('cors');
const jogoRoutes = require('./routes/jogo.routes');

const app = express();

app.use(cors());
app.use(express.json());

// Rotas de jogos
app.use('/api/jogos', jogoRoutes);

// Raiz simples
app.get('/', (req, res) => {
  res.json({ message: 'PixelBot API Online' });
});

module.exports = app;
