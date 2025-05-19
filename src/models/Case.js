const mongoose = require('mongoose');

const CaseSchema = new mongoose.Schema({
  numero: { type: String, required: true, unique: true },
  descricao: { type: String, required: true },
  dataAbertura: { type: Date, required: true },
  peritoResponsavel: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['Concluído', 'Em Andamento', 'Pendente', 'Arquivado'], default: 'Pendente' },
  local: { type: String },
  solicitadoPor: { type: String },
  detalhes: { type: String },
  equipe: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Case', CaseSchema);
