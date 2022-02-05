const Joi = require('joi');
const rescue = require('express-rescue');

const UserModel = require('../models/UserModel');

const schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).messages({
  'string.base': `{#label} should be a type of 'text'`,
  'string.empty': `{#label} cannot be an empty field`,
  'string.email': `{#label} should be a valid email address`,
  'string.min': `{#label} should have a minimum length of {#limit}`,
  'any.required': `{#label} is a required field`,
});

module.exports = rescue(async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  const { error } = schema.validate({ firstName, lastName, email, password });

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
