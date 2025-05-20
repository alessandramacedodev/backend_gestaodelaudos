const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');  
const app = express();
const PORT = 5000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/odontoforense', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB conectado'))
  .catch(err => console.log('Erro conexão MongoDB:', err));

app.post('/usuarios', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ mensagem: 'Usuário criado com sucesso!' });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
