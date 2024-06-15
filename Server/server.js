const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

// Create a new express application instance
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// PostgreSQL connection setup
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'SaptosiDB',
  password: 'root123',
  port: 5432,
});

// Route to handle account creation
app.post('/create-account', async (req, res) => {
  const { userName, phoneNumber, email } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO users (u_name, ph_no, email) VALUES ($1, $2, $3) RETURNING *',
      [userName, phoneNumber, email]
    );
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to fetch user details by phone number
app.get('/get-user/:phoneNumber', async (req, res) => {
  const { phoneNumber } = req.params;

  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE ph_no = $1',
      [phoneNumber]
    );
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to update user details
app.put('/update-user', async (req, res) => {
  const { userName, phoneNumber, email, address } = req.body;

  try {
    const result = await pool.query(
      'UPDATE users SET u_name = $1, email = $2, addr = $3 WHERE ph_no = $4 RETURNING *',
      [userName, email, address, phoneNumber]
    );
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
