const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // caminho para o modelo
const app = express();
const PORT = 5000;

// Middleware para JSON
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/odontoforense', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Rota para criar usuário
app.post('/usuarios', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ mensagem: 'Usuário criado com sucesso!' });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

// Start
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
