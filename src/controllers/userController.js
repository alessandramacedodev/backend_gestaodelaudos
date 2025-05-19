const User = require('../models/User.js');

// Criar novo usuário
exports.createUser = async (req, res) => {
  try {
    const { nome, email, perfil } = req.body;
    const novoUsuario = new User({ nome, email, perfil });
    await novoUsuario.save();
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao criar usuário', erro: error.message });
  }
};

// Listar usuários com filtros
exports.listUsers = async (req, res) => {
  try {
    const { nome, email, perfil } = req.query;
    const filtro = {};
    if (nome) filtro.nome = { $regex: nome, $options: 'i' };
    if (email) filtro.email = { $regex: email, $options: 'i' };
    if (perfil) filtro.perfil = perfil;

    const usuarios = await User.find(filtro);
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao listar usuários', erro: error.message });
  }
};

// Obter usuário por ID
exports.getUserById = async (req, res) => {
  try {
    const usuario = await User.findById(req.params.id);
    if (!usuario) return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter usuário', erro: error.message });
  }
};

// Atualizar usuário
exports.updateUser = async (req, res) => {
  try {
    const { nome, email, perfil } = req.body;
    const usuarioAtualizado = await User.findByIdAndUpdate(
      req.params.id,
      { nome, email, perfil },
      { new: true }
    );
    if (!usuarioAtualizado) return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    res.status(200).json(usuarioAtualizado);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao atualizar usuário', erro: error.message });
  }
};

// Deletar usuário
exports.deleteUser = async (req, res) => {
  try {
    const usuarioDeletado = await User.findByIdAndDelete(req.params.id);
    if (!usuarioDeletado) return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    res.status(200).json({ mensagem: 'Usuário deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao deletar usuário', erro: error.message });
  }
};
