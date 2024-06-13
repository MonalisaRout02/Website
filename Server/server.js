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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
