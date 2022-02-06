const rescue = require('express-rescue');

const UserModel = require('../models/user.model');
const UserSchema = require('../schemas/user.schema');

module.exports = [
  (req, _res, next) => {
    const { firstName, lastName, email, password } = req.body;
    const { error } = UserSchema.validate({
      firstName,
      lastName,
      email,
      password,
    });

    if (error) {
      const err = new Error(error.details[0].message);
      err.status = 400;
      return next(err);
    }

    next();
  },
  rescue(async (req, _res, next) => {
    const { id } = req.params;

    const user = await UserModel.findById(id);

    if (!user) {
      const err = new Error('User not found');
      err.status = 404;
      return next(err);
    }

    next();
  }),
  rescue(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const { id } = req.params;

    const updatedUser = await UserModel.update(id, {
      firstName,
      lastName,
      email,
      password,
    });

    res.status(200).json(updatedUser);
  }),
];
