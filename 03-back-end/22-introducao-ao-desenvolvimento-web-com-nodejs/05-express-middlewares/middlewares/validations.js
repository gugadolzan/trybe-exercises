const {
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_UNAUTHORIZED,
  MESSAGE_MISSING_FIELDS,
  MESSAGE_INVALID_DATA,
} = require('../utils');

const isValidUsername = (req, res, next) => {
  const { username } = req.body;

  if (!username)
    return res.status(HTTP_STATUS_UNAUTHORIZED).json(MESSAGE_MISSING_FIELDS);

  if (!(username.length > 3))
    return res.status(HTTP_STATUS_BAD_REQUEST).json(MESSAGE_INVALID_DATA);

  next();
};

const isValidEmail = (req, res, next) => {
  const { email } = req.body;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email)
    return res.status(HTTP_STATUS_UNAUTHORIZED).json(MESSAGE_MISSING_FIELDS);

  if (!re.test(email))
    return res.status(HTTP_STATUS_BAD_REQUEST).json(MESSAGE_INVALID_DATA);

  next();
};

const isValidPassword = (req, res, next) => {
  const { password } = req.body;
  const re = /^[0-9]*$/;

  if (!password)
    return res.status(HTTP_STATUS_UNAUTHORIZED).json(MESSAGE_MISSING_FIELDS);

  if (password.length >= 4 && password.length <= 8 && !re.test(password))
    return res.status(HTTP_STATUS_BAD_REQUEST).json(MESSAGE_INVALID_DATA);

  next();
};

module.exports = { isValidUsername, isValidEmail, isValidPassword };
