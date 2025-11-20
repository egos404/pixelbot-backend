const express = require('express');
const cors = require('cors');
const jogoRoutes = require('./routes/jogo.routes');

const app = express();

app.use(cors());           
app.use(express.json());

app.use('/api/jogos', jogoRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'PixelBot API Online' });
});

module.exports = app;