const {
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_UNAUTHORIZED,
  MESSAGE_INVALID_DATA,
  MESSAGE_INVALID_TOKEN,
} = require('../utils');

const isValidUsername = (req, res, next) => {
  const { username } = req.body;

  if (!username || !(username.length > 3))
    return res.status(HTTP_STATUS_BAD_REQUEST).json(MESSAGE_INVALID_DATA);

  next();
};

const isValidEmail = (req, res, next) => {
  const { email } = req.body;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !re.test(email))
    return res.status(HTTP_STATUS_BAD_REQUEST).json(MESSAGE_INVALID_DATA);

  next();
};

const isValidPassword = (req, res, next) => {
  const { password } = req.body;
  const re = /^[0-9]*$/;

  if (
    !password ||
    (password.length >= 4 && password.length <= 8 && !re.test(password))
  )
    return res.status(HTTP_STATUS_BAD_REQUEST).json(MESSAGE_INVALID_DATA);

  next();
};

const isValidToken = (req, res, next) => {
  const token = req.headers.authorization;
  const re = /^[a-zA-Z0-9]{12}$/;

  if (!token || !re.test(token))
    return res.status(HTTP_STATUS_UNAUTHORIZED).json(MESSAGE_INVALID_TOKEN);

  next();
};

module.exports = {
  isValidUsername,
  isValidEmail,
  isValidPassword,
  isValidToken,
};
