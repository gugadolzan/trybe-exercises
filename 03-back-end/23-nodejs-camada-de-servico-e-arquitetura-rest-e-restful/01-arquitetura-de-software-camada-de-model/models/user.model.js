const connection = require('./connection');

const format = ({ id, first_name, last_name, email, password }) => ({
  id,
  firstName: first_name,
  lastName: last_name,
  email,
  password,
});

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

  return connection.execute(query).then(([rows]) => rows.map(format));
};

const findById = (id) => {
  const query = `
    SELECT * FROM users WHERE id = ?  
  `;

  return connection.execute(query, [id]).then(([rows]) => rows.map(format)[0]);
};

const update = async (id, { firstName, lastName, email, password }) => {
  const query = `
    UPDATE users
    SET first_name = ?, last_name = ?, email = ?, password = ?
    WHERE id = ?
  `;

  await connection.execute(query, [firstName, lastName, email, password, id]);

  return findById(id);
};

module.exports = {
  create,
  getAll,
  findById,
  update,
};
