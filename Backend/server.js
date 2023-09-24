// Import the required modules
const express = require('express');

// Create an instance of the Express application
const app = express();

// Import the database connection from db.js
const pool = require('../Backend/configurations/db'); // Adjust the path as needed

// Define a route that responds with "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Set the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
