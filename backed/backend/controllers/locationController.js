const Location = require('../models/Location');

// Get all locations
const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.getAll();
    res.status(200).json(locations);
  } catch (error) {
    console.error('Error in getAllLocations:', error);
    res.status(500).json({ message: 'Error fetching locations', error: error.message });
  }
};

// Get location by ID
const getLocationById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const location = await Location.getById(id);
    
    if (!location) {
      return res.status(404).json({ message: `Location with ID ${id} not found` });
    }
    
    res.status(200).json(location);
  } catch (error) {
    console.error('Error in getLocationById:', error);
    res.status(500).json({ message: 'Error fetching location', error: error.message });
  }
};

// Create a new location
const createLocation = async (req, res) => {
  try {
    const { location_name, longitude, latitude, modern_name, country } = req.body;
    
    if (!location_name) {
      return res.status(400).json({ message: 'Location name is required' });
    }
    
    const newLocation = await Location.create({ 
      location_name, 
      longitude, 
      latitude, 
      modern_name, 
      country 
    });
    
    res.status(201).json(newLocation);
  } catch (error) {
    console.error('Error in createLocation:', error);
    res.status(500).json({ message: 'Error creating location', error: error.message });
  }
};

// Update a location
const updateLocation = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { location_name, longitude, latitude, modern_name, country } = req.body;
    
    if (!location_name) {
      return res.status(400).json({ message: 'Location name is required' });
    }
    
    const location = await Location.getById(id);
    if (!location) {
      return res.status(404).json({ message: `Location with ID ${id} not found` });
    }
    
    const updatedLocation = await Location.update(id, { 
      location_name, 
      longitude, 
      latitude, 
      modern_name, 
      country 
    });
    
    res.status(200).json(updatedLocation);
  } catch (error) {
    console.error('Error in updateLocation:', error);
    res.status(500).json({ message: 'Error updating location', error: error.message });
  }
};

// Delete a location
const deleteLocation = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    const location = await Location.getById(id);
    if (!location) {
      return res.status(404).json({ message: `Location with ID ${id} not found` });
    }
    
    // Check if location is being used by battles or events
    const { battles, events } = await Location.getDependencies(id);
    
    if (battles.length > 0 || events.length > 0) {
      return res.status(409).json({ 
        message: 'Cannot delete location as it is referenced by battles or events',
        dependencies: { battles, events }
      });
    }
    
    await Location.delete(id);
    res.status(200).json({ message: `Location with ID ${id} deleted successfully` });
  } catch (error) {
    console.error('Error in deleteLocation:', error);
    res.status(500).json({ message: 'Error deleting location', error: error.message });
  }
};

// Get battles at a location
const getLocationBattles = async (req, res) => {
  try {
    const locationId = parseInt(req.params.id);
    
    const location = await Location.getById(locationId);
    if (!location) {
      return res.status(404).json({ message: `Location with ID ${locationId} not found` });
    }
    
    const battles = await Location.getBattles(locationId);
    res.status(200).json(battles);
  } catch (error) {
    console.error('Error in getLocationBattles:', error);
    res.status(500).json({ message: 'Error fetching battles for location', error: error.message });
  }
};

// Get events at a location
const getLocationEvents = async (req, res) => {
  try {
    const locationId = parseInt(req.params.id);
    
    const location = await Location.getById(locationId);
    if (!location) {
      return res.status(404).json({ message: `Location with ID ${locationId} not found` });
    }
    
    const events = await Location.getEvents(locationId);
    res.status(200).json(events);
  } catch (error) {
    console.error('Error in getLocationEvents:', error);
    res.status(500).json({ message: 'Error fetching events for location', error: error.message });
  }
};

module.exports = {
  getAllLocations,
  getLocationById,
  createLocation,
  updateLocation,
  deleteLocation,
  getLocationBattles,
  getLocationEvents
}; 