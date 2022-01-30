const express = require('express');

const {
  isValidUsername,
  isValidEmail,
  isValidPassword,
} = require('../middlewares/validations');
const {
  HTTP_STATUS_OK,
  HTTP_STATUS_CREATED,
  MESSAGE_USER_CREATED,
} = require('../utils');
const generateToken = require('../utils/generateToken');

const router = express.Router();

router.post(
  '/register',
  isValidUsername,
  isValidEmail,
  isValidPassword,
  (_req, res) => res.status(HTTP_STATUS_CREATED).json(MESSAGE_USER_CREATED)
);

router.post('/login', isValidEmail, isValidPassword, (_req, res) =>
  res.status(HTTP_STATUS_OK).json({ token: generateToken() })
);

module.exports = router;
