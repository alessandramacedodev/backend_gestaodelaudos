const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  numero: { type: String, required: true, unique: true },
  titulo: { type: String, required: true },
  dataEmissao: { type: Date, required: true },
  tipo: { type: String, enum: ['Preliminar', 'Final', 'Complementar'], required: true },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  casoRelacionado: { type: mongoose.Schema.Types.ObjectId, ref: 'Case', required: true },
  conteudo: {
    introducao: { type: String },
    metodologia: { type: String },
    analiseResultados: { type: String },
    conclusao: { type: String },
  },
  anexos: [{ type: String }],
});

module.exports = mongoose.model('Report', ReportSchema);
