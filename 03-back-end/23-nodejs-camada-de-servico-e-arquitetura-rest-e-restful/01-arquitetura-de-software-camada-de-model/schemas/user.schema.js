const Joi = require('joi');

module.exports = Joi.object({
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
