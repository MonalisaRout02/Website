const pool = require('./db');

const createUser = async (userName, phoneNumber, email) => {
  const result = await pool.query(
    "INSERT INTO users (u_name, ph_no, email) VALUES ($1, $2, $3) RETURNING *",
    [userName, phoneNumber, email]
  );
  return result.rows[0];
};

const getUserByPhoneNumber = async (phoneNumber) => {
  const result = await pool.query("SELECT * FROM users WHERE ph_no = $1", [phoneNumber]);
  return result.rows[0];
};

const updateUser = async (userName, phoneNumber, email, address) => {
  const result = await pool.query(
    "UPDATE users SET u_name = $1, email = $2, addr = $3 WHERE ph_no = $4 RETURNING *",
    [userName, email, address, phoneNumber]
  );
  return result.rows[0];
};

module.exports = { createUser, getUserByPhoneNumber, updateUser };
