const rescue = require('express-rescue');

const UserModel = require('../models/UserModel');

module.exports = rescue(async (req, res, next) => {
  const { id } = req.params;

  const user = await UserModel.findById(id);

  if (!user)
    return next({
      status: 404,
      message: 'User not found',
    });

  res.status(200).json(user);
});
