const mysql = require('mysql2/promise');

// Create a connection pool to the database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',  // Replace with your MySQL username
  password: 'sleem',  // Replace with your MySQL password
  database: 'mydb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test the database connection
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Database connection successful');
    connection.release();
    return true;
  } catch (error) {
    console.error('Database connection failed:', error.message);
    console.error('Please check your database configuration and ensure the server is running.');
    return false;
  }
}

module.exports = {
  pool,
  testConnection
}; 