// src/db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',        // replace with your PostgreSQL username
  host: 'localhost',
  database: 'postgres',    // replace with your database name
  password: 'postgres', // replace with your PostgreSQL password
  port: 5432,                  // default PostgreSQL port
});

const connectDB = async () => {
  try {
    await pool.connect();
    console.log('PostgreSQL connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = { pool, connectDB };
