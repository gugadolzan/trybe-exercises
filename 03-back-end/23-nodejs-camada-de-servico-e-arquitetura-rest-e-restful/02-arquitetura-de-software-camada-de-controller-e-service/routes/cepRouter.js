const express = require('express');

const cepController = require('../controllers/cepController');

const router = express.Router();

router.get('/:cep', cepController.getCep);
router.post('/', cepController.createCep);

module.exports = router;
