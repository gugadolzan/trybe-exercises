const Joi = require('joi');
const rescue = require('express-rescue');

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

module.exports = rescue((req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const { error } = schema.validate({ firstName, lastName, email, password });

  if (error) throw error;

  // create user

  res.status(201).json({ id: 1, firstName, lastName, email });
});
