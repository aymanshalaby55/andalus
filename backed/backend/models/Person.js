const { pool } = require('../config/db');

class Person {
  // Get all persons
  static async getAll() {
    try {
      const [rows] = await pool.query('SELECT * FROM persons');
      return rows;
    } catch (error) {
      console.error('Error fetching persons:', error);
      throw error;
    }
  }

  // Get person by ID
  static async getById(id) {
    try {
      const [rows] = await pool.query('SELECT * FROM persons WHERE person_id = ?', [id]);
      return rows[0];
    } catch (error) {
      console.error(`Error fetching person with ID ${id}:`, error);
      throw error;
    }
  }

  // Create a new person
  static async create(personData) {
    try {
      const { first_name, last_name, birth_date, death_date, _role, bio, full_details } = personData;
      const [result] = await pool.query(
        'INSERT INTO persons (first_name, last_name, birth_date, death_date, _role, bio, full_details) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [first_name, last_name, birth_date, death_date, _role, bio, full_details]
      );
      return { id: result.insertId, ...personData };
    } catch (error) {
      console.error('Error creating person:', error);
      throw error;
    }
  }

  // Update a person
  static async update(id, personData) {
    try {
      const { first_name, last_name, birth_date, death_date, _role, bio, full_details } = personData;
      await pool.query(
        'UPDATE persons SET first_name = ?, last_name = ?, birth_date = ?, death_date = ?, _role = ?, bio = ?, full_details = ? WHERE person_id = ?',
        [first_name, last_name, birth_date, death_date, _role, bio, full_details, id]
      );
      return { id, ...personData };
    } catch (error) {
      console.error(`Error updating person with ID ${id}:`, error);
      throw error;
    }
  }

  // Delete a person
  static async delete(id) {
    try {
      await pool.query('DELETE FROM persons WHERE person_id = ?', [id]);
      return { id };
    } catch (error) {
      console.error(`Error deleting person with ID ${id}:`, error);
      throw error;
    }
  }

  // Search persons
  static async search(query) {
    try {
      const searchQuery = `%${query}%`;
      const [rows] = await pool.query(
        'SELECT * FROM persons WHERE first_name LIKE ? OR last_name LIKE ? OR _role LIKE ? OR bio LIKE ?',
        [searchQuery, searchQuery, searchQuery, searchQuery]
      );
      return rows;
    } catch (error) {
      console.error(`Error searching persons with query "${query}":`, error);
      throw error;
    }
  }
}

module.exports = Person; 