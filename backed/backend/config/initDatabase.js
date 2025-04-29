const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

async function initializeDatabase() {
  let connection;
  
  try {
    // Create connection without database selected
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',  // Replace with your MySQL username
      password: 'sleem',  // Replace with your MySQL password
      database: 'mydb'
    });

    console.log('Connected to MySQL server');
    
    // Get all SQL files from the database directory
    const databaseDir = path.join(__dirname, '../../database');
    const sqlFiles = fs.readdirSync(databaseDir)
      .filter(file => file.endsWith('.sql'))
      .map(file => path.join(databaseDir, file));
    
    console.log(`Found ${sqlFiles.length} SQL files to execute`);
    
    // Execute each SQL file
    for (const sqlFile of sqlFiles) {
      console.log(`Executing SQL file: ${sqlFile}`);
      const sqlScript = fs.readFileSync(sqlFile, 'utf8');
      
      // Split the script to handle multiple statements and filter out comments
      const statements = sqlScript
        .replace(/--.*$/gm, '') // Remove single line comments
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments
        .split(';')
        .filter(statement => statement.trim());
      console.log(statements);
      // Execute each statement
      for (const statement of statements) {
        if (statement.trim()) {
          try {
            await connection.execute(statement.trim());
          } catch (err) {
            console.warn(`Warning executing statement from ${sqlFile}: ${err.message}`);
          }
        }
      }
      
      console.log(`Completed execution of ${sqlFile}`);
    }
    
    console.log('Database initialization completed successfully');
    return true;
  } catch (error) {
    console.error('Error initializing database:', error);
    return false;
  } finally {
    if (connection) {
      await connection.end();
      console.log('Database connection closed');
    }
  }
}

// Run initialization if file is executed directly
if (require.main === module) {
  initializeDatabase();
}

module.exports = initializeDatabase; 