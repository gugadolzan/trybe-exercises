const Joi = require('joi');

module.exports = Joi.object({
  cep: Joi.string().required(),
  logradouro: Joi.string().required(),
  bairro: Joi.string().required(),
  localidade: Joi.string().required(),
  uf: Joi.string().required(),
});
