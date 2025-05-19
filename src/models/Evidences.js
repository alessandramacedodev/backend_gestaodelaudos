const mongoose = require('mongoose');

const EvidenceSchema = new mongoose.Schema({
  caso: { type: mongoose.Schema.Types.ObjectId, ref: 'Case', required: true },
  nome: { type: String, required: true },
  categoria: { type: String, enum: ['Odontológica', 'Documentos', 'Fotografias', 'Laboratório', 'Outros'], required: true },
  dataColeta: { type: Date, required: true },
  descricao: { type: String },
  localRetirada: { type: String },
  arquivos: [{ type: String }],
});

module.exports = mongoose.model('Evidence', EvidenceSchema);
