const express = require('express');
const router = express.Router();
const { createCase, getCases, getCaseById, updateCase, deleteCase } = require('../controllers/caseController');
const authMiddleware = require('../middlewares/authMiddleware');

/**
 * @swagger
 * /casos:
 *   get:
 *     summary: Lista todos os casos periciais
 *     tags:
 *       - Casos
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de casos retornada com sucesso
 */
router.get('/', authMiddleware, getCases);

/**
 * @swagger
 * /casos:
 *   post:
 *     summary: Cria um novo caso pericial
 *     tags:
 *       - Casos
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               descricao:
 *                 type: string
 *     responses:
 *       201:
 *         description: Caso criado com sucesso
 */
router.post('/', authMiddleware, createCase);

/**
 * @swagger
 * /casos/{id}:
 *   get:
 *     summary: Obtém um caso pericial pelo ID
 *     tags:
 *       - Casos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do caso
 *     responses:
 *       200:
 *         description: Caso encontrado
 *       404:
 *         description: Caso não encontrado
 */
router.get('/:id', authMiddleware, getCaseById);

/**
 * @swagger
 * /casos/{id}:
 *   put:
 *     summary: Atualiza um caso pericial pelo ID
 *     tags:
 *       - Casos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do caso
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               descricao:
 *                 type: string
 *     responses:
 *       200:
 *         description: Caso atualizado com sucesso
 *       404:
 *         description: Caso não encontrado
 */
router.put('/:id', authMiddleware, updateCase);

/**
 * @swagger
 * /casos/{id}:
 *   delete:
 *     summary: Remove um caso pericial pelo ID
 *     tags:
 *       - Casos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do caso
 *     responses:
 *       200:
 *         description: Caso removido com sucesso
 *       404:
 *         description: Caso não encontrado
 */
router.delete('/:id', authMiddleware, deleteCase);

module.exports = router;
