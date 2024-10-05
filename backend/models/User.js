const pool = require('../config/db');
const bcrypt = require('bcrypt');

const createUser = async (username, password, role) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await pool.query(
    'INSERT INTO users (username, password, role) VALUES ($1, $2, $3) RETURNING *',
    [username, hashedPassword, role]
  );
  return result.rows[0];
};

module.exports = { createUser };