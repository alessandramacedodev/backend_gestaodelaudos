const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User.js');

// POST /api/auth/login
exports.login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(senha, user.senha))) {
      return res.status(401).json({ mensagem: 'Credenciais inválidas' });
    }

    const token = jwt.sign(
      {
        id: user._id,
        nome: user.nome,
        email: user.email,
        perfil: user.perfil
      },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    );

    res.json({ token, usuario: { id: user._id, nome: user.nome, perfil: user.perfil } });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao realizar login', erro: error.message });
  }
};
