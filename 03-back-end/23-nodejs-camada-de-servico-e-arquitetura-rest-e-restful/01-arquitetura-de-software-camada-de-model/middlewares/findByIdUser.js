const rescue = require('express-rescue');

const UserModel = require('../models/UserModel');

module.exports = rescue(async (req, res, next) => {
  const { id } = req.params;

  const user = await UserModel.findById(id);

  if (!user) {
    const err = new Error('User not found');
    err.status = 404;
    return next(err);
  }

  res.status(200).json(user);
});
