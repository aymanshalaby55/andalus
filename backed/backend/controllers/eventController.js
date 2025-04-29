const Event = require('../models/Event');

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.getAll();
    res.status(200).json(events);
  } catch (error) {
    console.error('Error in getAllEvents:', error);
    res.status(500).json({ message: 'Error fetching events', error: error.message });
  }
};

// Get all events with location details
const getAllEventsWithLocations = async (req, res) => {
  try {
    const events = await Event.getAllWithLocations();
    res.status(200).json(events);
  } catch (error) {
    console.error('Error in getAllEventsWithLocations:', error);
    res.status(500).json({ message: 'Error fetching events with locations', error: error.message });
  }
};

// Get event by ID
const getEventById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const event = await Event.getById(id);
    
    if (!event) {
      return res.status(404).json({ message: `Event with ID ${id} not found` });
    }
    
    res.status(200).json(event);
  } catch (error) {
    console.error('Error in getEventById:', error);
    res.status(500).json({ message: 'Error fetching event', error: error.message });
  }
};

// Create a new event
const createEvent = async (req, res) => {
  try {
    const { event_name, event_date, description, location_id, event_type } = req.body;
    
    if (!event_name) {
      return res.status(400).json({ message: 'Event name is required' });
    }
    
    const newEvent = await Event.create({ event_name, event_date, description, location_id, event_type });
    res.status(201).json(newEvent);
  } catch (error) {
    console.error('Error in createEvent:', error);
    res.status(500).json({ message: 'Error creating event', error: error.message });
  }
};

// Update an event
const updateEvent = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { event_name, event_date, description, location_id, event_type } = req.body;
    
    if (!event_name) {
      return res.status(400).json({ message: 'Event name is required' });
    }
    
    const event = await Event.getById(id);
    if (!event) {
      return res.status(404).json({ message: `Event with ID ${id} not found` });
    }
    
    const updatedEvent = await Event.update(id, { event_name, event_date, description, location_id, event_type });
    res.status(200).json(updatedEvent);
  } catch (error) {
    console.error('Error in updateEvent:', error);
    res.status(500).json({ message: 'Error updating event', error: error.message });
  }
};

// Delete an event
const deleteEvent = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    const event = await Event.getById(id);
    if (!event) {
      return res.status(404).json({ message: `Event with ID ${id} not found` });
    }
    
    await Event.delete(id);
    res.status(200).json({ message: `Event with ID ${id} deleted successfully` });
  } catch (error) {
    console.error('Error in deleteEvent:', error);
    res.status(500).json({ message: 'Error deleting event', error: error.message });
  }
};

// Get persons involved in an event
const getEventPersons = async (req, res) => {
  try {
    const eventId = parseInt(req.params.id);
    
    const event = await Event.getById(eventId);
    if (!event) {
      return res.status(404).json({ message: `Event with ID ${eventId} not found` });
    }
    
    const persons = await Event.getEventPersons(eventId);
    res.status(200).json(persons);
  } catch (error) {
    console.error('Error in getEventPersons:', error);
    res.status(500).json({ message: 'Error fetching persons for event', error: error.message });
  }
};

// Add a person to an event
const addPersonToEvent = async (req, res) => {
  try {
    const eventId = parseInt(req.params.id);
    const { person_id, role_in_event } = req.body;
    
    if (!person_id) {
      return res.status(400).json({ message: 'Person ID is required' });
    }
    
    const event = await Event.getById(eventId);
    if (!event) {
      return res.status(404).json({ message: `Event with ID ${eventId} not found` });
    }
    
    const result = await Event.addPerson(eventId, person_id, role_in_event);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error in addPersonToEvent:', error);
    res.status(500).json({ message: 'Error adding person to event', error: error.message });
  }
};

// Remove a person from an event
const removePersonFromEvent = async (req, res) => {
  try {
    const eventId = parseInt(req.params.eventId);
    const personId = parseInt(req.params.personId);
    
    const event = await Event.getById(eventId);
    if (!event) {
      return res.status(404).json({ message: `Event with ID ${eventId} not found` });
    }
    
    await Event.removePerson(eventId, personId);
    res.status(200).json({ message: `Person with ID ${personId} removed from event with ID ${eventId}` });
  } catch (error) {
    console.error('Error in removePersonFromEvent:', error);
    res.status(500).json({ message: 'Error removing person from event', error: error.message });
  }
};

module.exports = {
  getAllEvents,
  getAllEventsWithLocations,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  getEventPersons,
  addPersonToEvent,
  removePersonFromEvent
}; 