const { pool } = require('../config/db');

class Event {
  // Get all events
  static async getAll() {
    try {
      const [rows] = await pool.query('SELECT * FROM _events');
      return rows;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  }

  // Get event by ID
  static async getById(id) {
    try {
      const [rows] = await pool.query('SELECT * FROM _events WHERE event_id = ?', [id]);
      return rows[0];
    } catch (error) {
      console.error(`Error fetching event with ID ${id}:`, error);
      throw error;
    }
  }

  // Create a new event
  static async create(eventData) {
    try {
      const { event_name, event_date, description, location_id } = eventData;
      const [result] = await pool.query(
        'INSERT INTO _events (event_name, event_date, description, location_id) VALUES (?, ?, ?, ?)',
        [event_name, event_date, description, location_id]
      );
      return { id: result.insertId, ...eventData };
    } catch (error) {
      console.error('Error creating event:', error);
      throw error;
    }
  }

  // Update an event
  static async update(id, eventData) {
    try {
      const { event_name, event_date, description, location_id } = eventData;
      await pool.query(
        'UPDATE _events SET event_name = ?, event_date = ?, description = ?, location_id = ? WHERE event_id = ?',
        [event_name, event_date, description, location_id, id]
      );
      return { id, ...eventData };
    } catch (error) {
      console.error(`Error updating event with ID ${id}:`, error);
      throw error;
    }
  }

  // Delete an event
  static async delete(id) {
    try {
      await pool.query('DELETE FROM _events WHERE event_id = ?', [id]);
      return { id };
    } catch (error) {
      console.error(`Error deleting event with ID ${id}:`, error);
      throw error;
    }
  }

  // Get events with location details
  static async getAllWithLocations() {
    try {
      const [rows] = await pool.query(`
        SELECT e.*, l.location_name, l.region
        FROM _events e
        LEFT JOIN locations l ON e.location_id = l.location_id
      `);
      return rows;
    } catch (error) {
      console.error('Error fetching events with locations:', error);
      throw error;
    }
  }
}

module.exports = Event; 