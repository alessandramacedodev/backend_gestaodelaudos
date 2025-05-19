const express = require('express');
const router = express.Router();
const { addRecord, searchRecords, compareRecords } = require('../controllers/odontolegalController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, addRecord);
router.get('/search', authMiddleware, searchRecords);
router.post('/compare', authMiddleware, compareRecords);

module.exports = router;
