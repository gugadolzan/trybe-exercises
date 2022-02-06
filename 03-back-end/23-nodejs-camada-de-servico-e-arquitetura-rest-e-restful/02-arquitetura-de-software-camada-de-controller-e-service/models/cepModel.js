const connection = require('./connection');

const formatCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: cep.replace(/(\d{5})(\d{3})/, '$1-$2'),
  logradouro,
  bairro,
  localidade,
  uf,
});

const removeDash = (cep) => cep.replace(/-/g, '');

const createCep = async ({ cep, logradouro, bairro, localidade, uf }) => {
  cep = removeDash(cep);

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

  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);

  return getCep(cep);
};

const getCep = async (cep) => {
  cep = removeDash(cep);

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

  const [rows] = await connection.execute(query, [cep]);

  return rows.length ? formatCep(rows[0]) : null;
};

module.exports = {
  createCep,
  getCep,
};
