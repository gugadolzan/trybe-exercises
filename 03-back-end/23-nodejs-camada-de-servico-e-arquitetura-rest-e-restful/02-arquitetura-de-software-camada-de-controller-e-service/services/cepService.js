const cepModel = require('../models/cepModel');
const cepSchema = require('../schemas/cepSchema');

const isValidCep = (cep) => {
  const re = /\d{5}-?\d{3}/;

  return re.test(cep);
};

const createCep = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const data = { cep, logradouro, bairro, localidade, uf };

  const { error } = cepSchema.validate(data);

  if (error) {
    const err = new Error(error.details[0].message);
    err.status = 400;
    err.code = 'invalidData';
    throw err;
  }

  const cepData = await cepModel.getCep(cep);

  if (cepData) {
    const err = new Error('CEP já existente');
    err.status = 409;
    err.code = 'alreadyExists';
    throw err;
  }

  const newCep = await cepModel.createCep(data);

  return newCep;
};

const getCep = async (cep) => {
  if (!isValidCep(cep)) {
    const err = new Error('CEP inválido');
    err.status = 400;
    err.code = 'invalidData';
    throw err;
  }

  const cepData = await cepModel.getCep(cep);

  if (!cepData) {
    const err = new Error('CEP não encontrado');
    err.status = 404;
    err.code = 'notFound';
    throw err;
  }

  return cepData;
};

module.exports = {
  createCep,
  getCep,
};
