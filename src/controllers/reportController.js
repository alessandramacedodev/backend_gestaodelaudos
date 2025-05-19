const Report = require('../models/report.js');

// Criar novo laudo (report)
exports.createReport = async (req, res) => {
  try {
    const novoLaudo = new Report(req.body);
    await novoLaudo.save();
    res.status(201).json(novoLaudo);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao criar laudo', erro: error.message });
  }
};

// Listar laudos com filtros
exports.listReports = async (req, res) => {
  try {
    const filtro = {};
    // Adicionar filtros via req.query, por ex: status, data
    const laudos = await Report.find(filtro);
    res.status(200).json(laudos);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao listar laudos', erro: error.message });
  }
};

// Obter laudo por ID
exports.getReportById = async (req, res) => {
  try {
    const laudo = await Report.findById(req.params.id);
    if (!laudo) return res.status(404).json({ mensagem: 'Laudo não encontrado' });
    res.status(200).json(laudo);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter laudo', erro: error.message });
  }
};

// Atualizar laudo
exports.updateReport = async (req, res) => {
  try {
    const laudoAtualizado = await Report.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!laudoAtualizado) return res.status(404).json({ mensagem: 'Laudo não encontrado' });
    res.status(200).json(laudoAtualizado);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao atualizar laudo', erro: error.message });
  }
};

// Deletar laudo
exports.deleteReport = async (req, res) => {
  try {
    const laudoDeletado = await Report.findByIdAndDelete(req.params.id);
    if (!laudoDeletado) return res.status(404).json({ mensagem: 'Laudo não encontrado' });
    res.status(200).json({ mensagem: 'Laudo deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao deletar laudo', erro: error.message });
  }
};
