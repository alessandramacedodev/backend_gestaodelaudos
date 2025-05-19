const express = require('express');
const router = express.Router();
const { addEvidence, getEvidencesByCase } = require('../controllers/evidenceController');
const authMiddleware = require('../middlewares/authMiddleware');

/**
 * @swagger
 * /evidencias/{caseId}:
 *   post:
 *     summary: Adiciona uma evidência a um caso pericial
 *     tags:
 *       - Evidências
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: caseId
 *         in: path
 *         required: true
 *         description: ID do caso pericial
 *         schema:
 *           type: string
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
 *               urlArquivo:
 *                 type: string
 *                 description: URL do arquivo (pode ser um link do Cloudinary, Firebase etc.)
 *     responses:
 *       201:
 *         description: Evidência adicionada com sucesso
 *       400:
 *         description: Erro na requisição
 *       401:
 *         description: Token inválido ou ausente
 *       404:
 *         description: Caso não encontrado
 */
router.post('/:caseId', authMiddleware, addEvidence);

/**
 * @swagger
 * /evidencias/{caseId}:
 *   get:
 *     summary: Lista todas as evidências de um caso pericial
 *     tags:
 *       - Evidências
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: caseId
 *         in: path
 *         required: true
 *         description: ID do caso pericial
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de evidências retornada com sucesso
 *       401:
 *         description: Token inválido ou ausente
 *       404:
 *         description: Caso não encontrado
 */
router.get('/:caseId', authMiddleware, getEvidencesByCase);

module.exports = router;
