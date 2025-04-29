const { pool } = require('../config/db');

class Location {
  // Get all locations
  static async getAll() {
    try {
      const [rows] = await pool.query('SELECT * FROM locations');
      return rows;
    } catch (error) {
      console.error('Error fetching locations:', error);
      throw error;
    }
  }

  // Get location by ID
  static async getById(id) {
    try {
      const [rows] = await pool.query('SELECT * FROM locations WHERE location_id = ?', [id]);
      return rows[0];
    } catch (error) {
      console.error(`Error fetching location with ID ${id}:`, error);
      throw error;
    }
  }

  // Create a new location
  static async create(locationData) {
    try {
      const { location_name, region, description } = locationData;
      const [result] = await pool.query(
        'INSERT INTO locations (location_name, region, description) VALUES (?, ?, ?)',
        [location_name, region, description]
      );
      return { id: result.insertId, ...locationData };
    } catch (error) {
      console.error('Error creating location:', error);
      throw error;
    }
  }

  // Update a location
  static async update(id, locationData) {
    try {
      const { location_name, region, description } = locationData;
      await pool.query(
        'UPDATE locations SET location_name = ?, region = ?, description = ? WHERE location_id = ?',
        [location_name, region, description, id]
      );
      return { id, ...locationData };
    } catch (error) {
      console.error(`Error updating location with ID ${id}:`, error);
      throw error;
    }
  }

  // Delete a location
  static async delete(id) {
    try {
      await pool.query('DELETE FROM locations WHERE location_id = ?', [id]);
      return { id };
    } catch (error) {
      console.error(`Error deleting location with ID ${id}:`, error);
      throw error;
    }
  }
}

module.exports = Location; 