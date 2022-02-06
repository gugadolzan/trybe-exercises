const cepModel = require('../models/cepModel');

const isValidCep = (cep) => {
  const re = /\d{5}-?\d{3}/;

  return re.test(cep);
};

const createCep = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const cepData = await cepModel.getCep(cep);

  if (cepData)
    return {
      error: {
        message: 'CEP já existente',
        status: 409,
        code: 'alreadyExists',
      },
    };

  const newCep = await cepModel.createCep({
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  });

  return newCep;
};

const getCep = async (cep) => {
  if (!isValidCep(cep))
    return {
      error: {
        message: 'CEP inválido',
        status: 400,
        code: 'invalidData',
      },
    };

  const cepData = await cepModel.getCep(cep);

  if (!cepData)
    return {
      error: {
        message: 'CEP não encontrado',
        status: 404,
        code: 'notFound',
      },
    };

  return cepData;
};

module.exports = {
  createCep,
  getCep,
};
