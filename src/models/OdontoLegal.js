const mongoose = require('mongoose');

const OdontolegalSchema = new mongoose.Schema({
  tipoDenticao: { type: String, enum: ['Permanente', 'Decídua', 'Mista'], required: true },
  caracteristicas: { type: String, required: true },
  regiao: { type: String },
  dataRegistro: { type: Date, required: true },
  status: { type: String, enum: ['Identificado', 'Não Identificado'], default: 'Não Identificado' },
});

module.exports = mongoose.model('Odontolegal', OdontolegalSchema);
