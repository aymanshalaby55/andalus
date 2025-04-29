const { pool } = require('../config/db');

class Timeline {
  // Get all timeline entries
  static async getAll() {
    try {
      const [rows] = await pool.query('SELECT * FROM timeline ORDER BY timeline_id');
      return rows;
    } catch (error) {
      console.error('Error fetching timeline entries:', error);
      throw error;
    }
  }

  // Get timeline entry by ID
  static async getById(id) {
    try {
      const [rows] = await pool.query('SELECT * FROM timeline WHERE timeline_id = ?', [id]);
      return rows[0];
    } catch (error) {
      console.error(`Error fetching timeline entry with ID ${id}:`, error);
      throw error;
    }
  }

  // Create a new timeline entry
  static async create(timelineData) {
    try {
      const { timeline_id, full_details } = timelineData;
      const [result] = await pool.query(
        'INSERT INTO timeline (timeline_id, full_details) VALUES (?, ?)',
        [timeline_id, full_details]
      );
      return { id: timeline_id, ...timelineData };
    } catch (error) {
      console.error('Error creating timeline entry:', error);
      throw error;
    }
  }

  // Update a timeline entry
  static async update(id, timelineData) {
    try {
      const { full_details } = timelineData;
      await pool.query(
        'UPDATE timeline SET full_details = ? WHERE timeline_id = ?',
        [full_details, id]
      );
      return { id, ...timelineData };
    } catch (error) {
      console.error(`Error updating timeline entry with ID ${id}:`, error);
      throw error;
    }
  }

  // Delete a timeline entry
  static async delete(id) {
    try {
      await pool.query('DELETE FROM timeline WHERE timeline_id = ?', [id]);
      return { id };
    } catch (error) {
      console.error(`Error deleting timeline entry with ID ${id}:`, error);
      throw error;
    }
  }

  // Get a comprehensive timeline combining events, battles, and conquests
  static async getComprehensiveTimeline() {
    try {
      const [rows] = await pool.query(`
        SELECT 
          'event' as type, 
          event_id as id, 
          event_name as name, 
          event_date as date, 
          description
        FROM _events
        UNION ALL
        SELECT 
          'battle' as type, 
          battle_id as id, 
          battle_name as name, 
          battle_date as date, 
          description
        FROM battles
        UNION ALL
        SELECT 
          'conquest' as type, 
          conquest_id as id, 
          conquest_name as name, 
          conquest_date as date, 
          description
        FROM conquests
        ORDER BY date
      `);
      return rows;
    } catch (error) {
      console.error('Error fetching comprehensive timeline:', error);
      throw error;
    }
  }
}

module.exports = Timeline; 