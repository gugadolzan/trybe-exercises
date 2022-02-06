const cepModel = require('../models/cepModel');
const cepSchema = require('../schemas/cepSchema');

const isValidCep = (cep) => {
  const re = /\d{5}-?\d{3}/;

  return re.test(cep);
};

const throwError = (message, status, code) => {
  const err = new Error(message);
  err.status = status;
  err.code = code;
  throw err;
};

const createCep = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const data = { cep, logradouro, bairro, localidade, uf };

  const { error } = cepSchema.validate(data);

  if (error) throwError(error.details[0].message, 400, 'invalidData');

  const cepData = await cepModel.getCep(cep);

  if (cepData) throwError('CEP já existente', 409, 'alreadyExists');

  const newCep = await cepModel.createCep(data);

  return newCep;
};

const getCep = async (cep) => {
  if (!isValidCep(cep)) throwError('CEP inválido', 400, 'invalidData');

  const cepData = await cepModel.getCep(cep);

  if (!cepData) throwError('CEP não encontrado', 404, 'notFound');

  return cepData;
};

module.exports = {
  createCep,
  getCep,
};
