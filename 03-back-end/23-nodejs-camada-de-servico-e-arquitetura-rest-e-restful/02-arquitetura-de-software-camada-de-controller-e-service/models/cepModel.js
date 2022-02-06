const connection = require('./connection');

const createCep = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const query = `
    INSERT INTO
      ceps
    SET
      cep = ?,
      logradouro = ?,
      bairro = ?,
      localidade = ?,
      uf = ?
  `;

  // remove dash
  cep = cep.replace(/-/g, '');

  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);

  return getCep(cep);
};

const getCep = async (cep) => {
  const query = `
    SELECT
      cep,
      logradouro,
      bairro,
      localidade,
      uf
    FROM
      ceps
    WHERE
      cep = ?
  `;

  // remove dash
  cep = cep.replace(/-/g, '');

  const [rows] = await connection.execute(query, [cep]);

  return rows[0];
};

module.exports = {
  createCep,
  getCep,
};
