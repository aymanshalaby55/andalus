const { pool } = require('../config/db');

class Battle {
  // Get all battles
  static async getAll() {
    try {
      const [rows] = await pool.query('SELECT * FROM battles');
      return rows;
    } catch (error) {
      console.error('Error fetching battles:', error);
      throw error;
    }
  }

  // Get battle by ID
  static async getById(id) {
    try {
      const [rows] = await pool.query('SELECT * FROM battles WHERE battle_id = ?', [id]);
      return rows[0];
    } catch (error) {
      console.error(`Error fetching battle with ID ${id}:`, error);
      throw error;
    }
  }

  // Create a new battle
  static async create(battleData) {
    try {
      const { battle_name, battle_date, description, location_id } = battleData;
      const [result] = await pool.query(
        'INSERT INTO battles (battle_name, battle_date, description, location_id) VALUES (?, ?, ?, ?)',
        [battle_name, battle_date, description, location_id]
      );
      return { id: result.insertId, ...battleData };
    } catch (error) {
      console.error('Error creating battle:', error);
      throw error;
    }
  }

  // Update a battle
  static async update(id, battleData) {
    try {
      const { battle_name, battle_date, description, location_id } = battleData;
      await pool.query(
        'UPDATE battles SET battle_name = ?, battle_date = ?, description = ?, location_id = ? WHERE battle_id = ?',
        [battle_name, battle_date, description, location_id, id]
      );
      return { id, ...battleData };
    } catch (error) {
      console.error(`Error updating battle with ID ${id}:`, error);
      throw error;
    }
  }

  // Delete a battle
  static async delete(id) {
    try {
      await pool.query('DELETE FROM battles WHERE battle_id = ?', [id]);
      return { id };
    } catch (error) {
      console.error(`Error deleting battle with ID ${id}:`, error);
      throw error;
    }
  }

  // Get battles with location details
  static async getAllWithLocations() {
    try {
      const [rows] = await pool.query(`
        SELECT b.*, l.location_name, l.region
        FROM battles b
        LEFT JOIN locations l ON b.location_id = l.location_id
      `);
      return rows;
    } catch (error) {
      console.error('Error fetching battles with locations:', error);
      throw error;
    }
  }

  // Get persons involved in a battle
  static async getBattlePersons(battleId) {
    try {
      const [rows] = await pool.query(`
        SELECT p.*, bpr.role_in_battle
        FROM persons p
        JOIN battle_person_relation bpr ON p.person_id = bpr.person_id
        WHERE bpr.battle_id = ?
      `, [battleId]);
      return rows;
    } catch (error) {
      console.error(`Error fetching persons for battle with ID ${battleId}:`, error);
      throw error;
    }
  }

  // Add a person to a battle
  static async addPerson(battleId, personId, roleInBattle) {
    try {
      await pool.query(
        'INSERT INTO battle_person_relation (battle_id, person_id, role_in_battle) VALUES (?, ?, ?)',
        [battleId, personId, roleInBattle]
      );
      return { battleId, personId, roleInBattle };
    } catch (error) {
      console.error(`Error adding person ${personId} to battle ${battleId}:`, error);
      throw error;
    }
  }

  // Remove a person from a battle
  static async removePerson(battleId, personId) {
    try {
      await pool.query(
        'DELETE FROM battle_person_relation WHERE battle_id = ? AND person_id = ?',
        [battleId, personId]
      );
      return { battleId, personId };
    } catch (error) {
      console.error(`Error removing person ${personId} from battle ${battleId}:`, error);
      throw error;
    }
  }
}

module.exports = Battle; 