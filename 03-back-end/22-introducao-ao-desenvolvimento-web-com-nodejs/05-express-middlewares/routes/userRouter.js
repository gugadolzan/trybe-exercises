const express = require('express');

const registerUser = require('../middlewares/registerUser');
const {
  isValidUsername,
  isValidEmail,
  isValidPassword,
} = require('../middlewares/validations');

const router = express.Router();

router.post(
  '/register',
  isValidUsername,
  isValidEmail,
  isValidPassword,
  registerUser
);

module.exports = router;
