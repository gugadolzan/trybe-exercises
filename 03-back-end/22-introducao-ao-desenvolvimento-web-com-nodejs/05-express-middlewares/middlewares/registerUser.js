const { HTTP_STATUS_CREATED, MESSAGE_USER_CREATED } = require('../utils');

module.exports = (req, res) =>
  res.status(HTTP_STATUS_CREATED).json(MESSAGE_USER_CREATED);
