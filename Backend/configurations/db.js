const { Pool } = require('pg');

// Create a new PostgreSQL pool with your database connection details
const pool = new Pool({
  user: 'ecommerce_8q51_user',
  host: 'dpg-ck7caffsasqs73a8fts0-a.oregon-postgres.render.com',
  database: 'ecommerce_8q51',
  password: '2EdcCOdrBkrgP2MTzTGN8sY1H1rdJ91q',
  port: 5432, // Default PostgreSQL port is 5432
});

// Test the connection
pool.query('SELECT NOW()', (err, result) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the PostgreSQL database');
  }
});

module.exports = pool;



