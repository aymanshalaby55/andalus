const { pool } = require('../config/db');

class Conquest {
  // Get all conquests
  static async getAll() {
    try {
      const [rows] = await pool.query('SELECT * FROM conquests');
      return rows;
    } catch (error) {
      console.error('Error fetching conquests:', error);
      throw error;
    }
  }

  // Get conquest by ID
  static async getById(id) {
    try {
      const [rows] = await pool.query('SELECT * FROM conquests WHERE conquest_id = ?', [id]);
      return rows[0];
    } catch (error) {
      console.error(`Error fetching conquest with ID ${id}:`, error);
      throw error;
    }
  }

  // Create a new conquest
  static async create(conquestData) {
    try {
      const { conquest_name, conquest_date, description, location_id } = conquestData;
      const [result] = await pool.query(
        'INSERT INTO conquests (conquest_name, conquest_date, description, location_id) VALUES (?, ?, ?, ?)',
        [conquest_name, conquest_date, description, location_id]
      );
      return { id: result.insertId, ...conquestData };
    } catch (error) {
      console.error('Error creating conquest:', error);
      throw error;
    }
  }

  // Update a conquest
  static async update(id, conquestData) {
    try {
      const { conquest_name, conquest_date, description, location_id } = conquestData;
      await pool.query(
        'UPDATE conquests SET conquest_name = ?, conquest_date = ?, description = ?, location_id = ? WHERE conquest_id = ?',
        [conquest_name, conquest_date, description, location_id, id]
      );
      return { id, ...conquestData };
    } catch (error) {
      console.error(`Error updating conquest with ID ${id}:`, error);
      throw error;
    }
  }

  // Delete a conquest
  static async delete(id) {
    try {
      await pool.query('DELETE FROM conquests WHERE conquest_id = ?', [id]);
      return { id };
    } catch (error) {
      console.error(`Error deleting conquest with ID ${id}:`, error);
      throw error;
    }
  }

  // Get conquests with location details
  static async getAllWithLocations() {
    try {
      const [rows] = await pool.query(`
        SELECT c.*, l.location_name, l.region
        FROM conquests c
        LEFT JOIN locations l ON c.location_id = l.location_id
      `);
      return rows;
    } catch (error) {
      console.error('Error fetching conquests with locations:', error);
      throw error;
    }
  }

  // Get persons involved in a conquest
  static async getConquestPersons(conquestId) {
    try {
      const [rows] = await pool.query(`
        SELECT p.*, cpr.role_in_conquest
        FROM persons p
        JOIN conquest_person_relation cpr ON p.person_id = cpr.person_id
        WHERE cpr.conquest_id = ?
      `, [conquestId]);
      return rows;
    } catch (error) {
      console.error(`Error fetching persons for conquest with ID ${conquestId}:`, error);
      throw error;
    }
  }

  // Add a person to a conquest
  static async addPerson(conquestId, personId, roleInConquest) {
    try {
      await pool.query(
        'INSERT INTO conquest_person_relation (conquest_id, person_id, role_in_conquest) VALUES (?, ?, ?)',
        [conquestId, personId, roleInConquest]
      );
      return { conquestId, personId, roleInConquest };
    } catch (error) {
      console.error(`Error adding person ${personId} to conquest ${conquestId}:`, error);
      throw error;
    }
  }

  // Remove a person from a conquest
  static async removePerson(conquestId, personId) {
    try {
      await pool.query(
        'DELETE FROM conquest_person_relation WHERE conquest_id = ? AND person_id = ?',
        [conquestId, personId]
      );
      return { conquestId, personId };
    } catch (error) {
      console.error(`Error removing person ${personId} from conquest ${conquestId}:`, error);
      throw error;
    }
  }
}

module.exports = Conquest; 