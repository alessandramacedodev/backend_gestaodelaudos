const Evidence = require('../models/evidence.js');

// Criar nova evidência
exports.createEvidence = async (req, res) => {
  try {
    const novaEvidencia = new Evidence(req.body);
    await novaEvidencia.save();
    res.status(201).json(novaEvidencia);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao criar evidência', erro: error.message });
  }
};

// Listar evidências com filtros
exports.listEvidences = async (req, res) => {
  try {
    const { nome, categoria, dataInicio, dataFim } = req.query;
    const filtro = {};
    if (nome) filtro.nome = { $regex: nome, $options: 'i' };
    if (categoria) filtro.categoria = categoria;
    if (dataInicio && dataFim) filtro.dataColeta = { $gte: new Date(dataInicio), $lte: new Date(dataFim) };

    const evidencias = await Evidence.find(filtro);
    res.status(200).json(evidencias);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao listar evidências', erro: error.message });
  }
};

// Obter evidência por ID
exports.getEvidenceById = async (req, res) => {
  try {
    const evidencia = await Evidence.findById(req.params.id);
    if (!evidencia) return res.status(404).json({ mensagem: 'Evidência não encontrada' });
    res.status(200).json(evidencia);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter evidência', erro: error.message });
  }
};

// Atualizar evidência
exports.updateEvidence = async (req, res) => {
  try {
    const evidenciaAtualizada = await Evidence.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!evidenciaAtualizada) return res.status(404).json({ mensagem: 'Evidência não encontrada' });
    res.status(200).json(evidenciaAtualizada);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao atualizar evidência', erro: error.message });
  }
};

// Deletar evidência
exports.deleteEvidence = async (req, res) => {
  try {
    const evidenciaDeletada = await Evidence.findByIdAndDelete(req.params.id);
    if (!evidenciaDeletada) return res.status(404).json({ mensagem: 'Evidência não encontrada' });
    res.status(200).json({ mensagem: 'Evidência deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao deletar evidência', erro: error.message });
  }
};
