require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const swaggerSetup = require('./config/swagger');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Rotas
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/usuarios', require('./routes/userRoutes'));
app.use('/api/casos', require('./routes/caseRoutes'));
app.use('/api/evidencias', require('./routes/evidenceRoutes'));
app.use('/api/laudos', require('./routes/reportRoutes'));
app.use('/api/odontolegal', require('./routes/odontolegalRoutes'));

// Documentação Swagger
swaggerSetup(app);

// Conexão com o MongoDB e inicialização do servidor
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Servidor rodando na porta ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });
