const rescue = require('express-rescue');

const cepSchema = require('../schemas/cepSchema');
const cepService = require('../services/cepService');

const isValidCep = (cep) => {
  const re = /\d{5}-?\d{3}/;

  return re.test(cep);
};

const createCep = rescue(async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const { error } = cepSchema.validate({
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  });

  if (error) {
    error.status = 400;
    error.code = 'invalidData';
    return next(error);
  }

  const newCep = await cepService.createCep({
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  });

  if (newCep.error) return next(newCep.error);

  res.status(200).json(newCep);
});

const getCep = rescue(async (req, res, next) => {
  const { cep } = req.params;

  if (!isValidCep(cep)) {
    const error = new Error('CEP inválido');
    error.status = 400;
    error.code = 'invalidData';
    return next(error);
  }

  const cepData = await cepService.getCep(cep);

  if (cepData.error) return next(cepData.error);

  res.status(200).json(cepData);
});

module.exports = {
  createCep,
  getCep,
};
