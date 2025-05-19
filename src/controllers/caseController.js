const Case = require('../models/case.js');

// Criar novo caso
exports.createCase = async (req, res) => {
  try {
    const novoCaso = new Case(req.body);
    await novoCaso.save();
    res.status(201).json(novoCaso);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao criar caso', erro: error.message });
  }
};

// Listar casos com filtros
exports.listCases = async (req, res) => {
  try {
    const { numero, status, dataInicio, dataFim } = req.query;
    const filtro = {};
    if (numero) filtro.numero = { $regex: numero, $options: 'i' };
    if (status) filtro.status = status;
    if (dataInicio && dataFim) filtro.data = { $gte: new Date(dataInicio), $lte: new Date(dataFim) };

    const casos = await Case.find(filtro);
    res.status(200).json(casos);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao listar casos', erro: error.message });
  }
};

// Obter caso por ID
exports.getCaseById = async (req, res) => {
  try {
    const caso = await Case.findById(req.params.id);
    if (!caso) return res.status(404).json({ mensagem: 'Caso não encontrado' });
    res.status(200).json(caso);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter caso', erro: error.message });
  }
};

// Atualizar caso
exports.updateCase = async (req, res) => {
  try {
    const casoAtualizado = await Case.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!casoAtualizado) return res.status(404).json({ mensagem: 'Caso não encontrado' });
    res.status(200).json(casoAtualizado);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao atualizar caso', erro: error.message });
  }
};

// Deletar caso
exports.deleteCase = async (req, res) => {
  try {
    const casoDeletado = await Case.findByIdAndDelete(req.params.id);
    if (!casoDeletado) return res.status(404).json({ mensagem: 'Caso não encontrado' });
    res.status(200).json({ mensagem: 'Caso deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao deletar caso', erro: error.message });
  }
};
