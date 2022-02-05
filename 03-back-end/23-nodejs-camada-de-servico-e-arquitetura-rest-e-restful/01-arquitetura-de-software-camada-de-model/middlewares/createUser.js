const rescue = require('express-rescue');

const UserModel = require('../models/user.model');
const UserSchema = require('../schemas/user.schema');

module.exports = rescue(async (req, res, next) => {
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

  const createdUser = await UserModel.create({
    firstName,
    lastName,
    email,
    password,
  });

  res.status(201).json(createdUser);
});
