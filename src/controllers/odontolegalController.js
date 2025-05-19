const Odontolegal = require('../models/odontolegal.js');

// Criar novo registro odontolegal
exports.createOdontolegal = async (req, res) => {
  try {
    const novoRegistro = new Odontolegal(req.body);
    await novoRegistro.save();
    res.status(201).json(novoRegistro);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao criar registro odontolegal', erro: error.message });
  }
};

// Listar registros odontolegal com filtros
exports.listOdontolegals = async (req, res) => {
  try {
    const filtro = {};
    // Pode adicionar filtros conforme necessário, ex: req.query.status ou pacienteId
    const registros = await Odontolegal.find(filtro);
    res.status(200).json(registros);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao listar registros odontolegal', erro: error.message });
  }
};

// Obter registro odontolegal por ID
exports.getOdontolegalById = async (req, res) => {
  try {
    const registro = await Odontolegal.findById(req.params.id);
    if (!registro) return res.status(404).json({ mensagem: 'Registro odontolegal não encontrado' });
    res.status(200).json(registro);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter registro odontolegal', erro: error.message });
  }
};

// Atualizar registro odontolegal
exports.updateOdontolegal = async (req, res) => {
  try {
    const registroAtualizado = await Odontolegal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!registroAtualizado) return res.status(404).json({ mensagem: 'Registro odontolegal não encontrado' });
    res.status(200).json(registroAtualizado);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao atualizar registro odontolegal', erro: error.message });
  }
};

// Deletar registro odontolegal
exports.deleteOdontolegal = async (req, res) => {
  try {
    const registroDeletado = await Odontolegal.findByIdAndDelete(req.params.id);
    if (!registroDeletado) return res.status(404).json({ mensagem: 'Registro odontolegal não encontrado' });
    res.status(200).json({ mensagem: 'Registro odontolegal deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao deletar registro odontolegal', erro: error.message });
  }
};
