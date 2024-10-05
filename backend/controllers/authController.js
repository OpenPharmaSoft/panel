const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { createUser } = require('../models/User');
const pool = require('../config/db');

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
  if (user && bcrypt.compareSync(password, user.rows[0].password)) {
    const accessToken = jwt.sign({ username: user.rows[0].username, role: user.rows[0].role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ accessToken });
  } else {
    res.send('Username or password incorrect');
  }
};

module.exports = { login };