const connection = require('./connection');

const create = ({ firstName, lastName, email, password }) => {
  const query = `
    INSERT INTO users (first_name, last_name, email, password)
    VALUES (?, ?, ?, ?)
  `;

  return connection
    .execute(query, [firstName, lastName, email, password])
    .then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
};

const getAll = () => {
  const query = `
    SELECT * FROM users
  `;

  return connection.execute(query).then(([rows]) => rows);
};

module.exports = {
  create,
  getAll,
};
