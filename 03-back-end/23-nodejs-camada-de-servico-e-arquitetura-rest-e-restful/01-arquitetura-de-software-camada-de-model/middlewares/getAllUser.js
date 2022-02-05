const rescue = require('express-rescue');

const UserModel = require('../models/UserModel');

module.exports = rescue(async (_req, res) => {
  const users = await UserModel.getAll();

  res.status(200).json(users);
});
