const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getProfile,
  updateProfile
} = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');


router.use(authMiddleware);

// 👥 Lista todos os usuários 
router.get('/', getUsers);

//Busca usuário por ID
router.get('/:id', getUserById);

//  Atualiza usuário por ID
router.put('/:id', updateUser);

//  Deleta usuário por ID
router.delete('/:id', deleteUser);

//  Rota para o usuário logado acessar seu próprio perfil
router.get('/me/profile', getProfile);

// Atualiza o próprio perfil do usuário logado
router.put('/me/profile', updateProfile);

module.exports = router;
