const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  perfil: { type: String, enum: ['administrador', 'perito', 'assistente'], required: true },
  status: { type: String, enum: ['concluido', 'em andamento', 'pendente', 'arquivado'], default: 'pendente' },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('senha')) return next();
  this.senha = await bcrypt.hash(this.senha, 10);
  next();
});

module.exports = mongoose.model('User', userSchema);
