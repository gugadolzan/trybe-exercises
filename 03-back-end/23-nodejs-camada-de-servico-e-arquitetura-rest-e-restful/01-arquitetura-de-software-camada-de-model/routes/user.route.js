const express = require('express');

const {
  createUser,
  getAllUser,
  findByIdUser,
  updateUser,
} = require('../middlewares');

const router = express.Router();

router.post('/', createUser);
router.get('/', getAllUser);
router.get('/:id', findByIdUser);
router.put('/:id', updateUser);

module.exports = router;
