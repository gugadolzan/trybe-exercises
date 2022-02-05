const express = require('express');

const { createUser, getAllUser, findByIdUser } = require('../middlewares');

const router = express.Router();

router.post('/', createUser);

router.get('/', getAllUser);

router.get('/:id', findByIdUser);

module.exports = router;
