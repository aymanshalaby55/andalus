const express = require('express');
const router = express.Router();
const Conquest = require('../models/Conquest');

// Get all conquests
router.get('/', async (req, res) => {
  try {
    const conquests = await Conquest.getAll();
    res.status(200).json(conquests);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching conquests', error: error.message });
  }
});

// Get conquests with location details
router.get('/with-locations', async (req, res) => {
  try {
    const conquests = await Conquest.getAllWithLocations();
    res.status(200).json(conquests);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching conquests with locations', error: error.message });
  }
});

// Get conquest by ID
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const conquest = await Conquest.getById(id);
    
    if (!conquest) {
      return res.status(404).json({ message: `Conquest with ID ${id} not found` });
    }
    
    res.status(200).json(conquest);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching conquest', error: error.message });
  }
});

// Create a new conquest
router.post('/', async (req, res) => {
  try {
    const { conquest_name, conquest_date, description, location_id } = req.body;
    
    if (!conquest_name) {
      return res.status(400).json({ message: 'Conquest name is required' });
    }
    
    const newConquest = await Conquest.create({ conquest_name, conquest_date, description, location_id });
    res.status(201).json(newConquest);
  } catch (error) {
    res.status(500).json({ message: 'Error creating conquest', error: error.message });
  }
});

// Update a conquest
router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { conquest_name, conquest_date, description, location_id } = req.body;
    
    if (!conquest_name) {
      return res.status(400).json({ message: 'Conquest name is required' });
    }
    
    const conquest = await Conquest.getById(id);
    if (!conquest) {
      return res.status(404).json({ message: `Conquest with ID ${id} not found` });
    }
    
    const updatedConquest = await Conquest.update(id, { conquest_name, conquest_date, description, location_id });
    res.status(200).json(updatedConquest);
  } catch (error) {
    res.status(500).json({ message: 'Error updating conquest', error: error.message });
  }
});

// Delete a conquest
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    const conquest = await Conquest.getById(id);
    if (!conquest) {
      return res.status(404).json({ message: `Conquest with ID ${id} not found` });
    }
    
    await Conquest.delete(id);
    res.status(200).json({ message: `Conquest with ID ${id} deleted successfully` });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting conquest', error: error.message });
  }
});

// Get persons involved in a conquest
router.get('/:id/persons', async (req, res) => {
  try {
    const conquestId = parseInt(req.params.id);
    
    const conquest = await Conquest.getById(conquestId);
    if (!conquest) {
      return res.status(404).json({ message: `Conquest with ID ${conquestId} not found` });
    }
    
    const persons = await Conquest.getConquestPersons(conquestId);
    res.status(200).json(persons);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching persons for conquest', error: error.message });
  }
});

// Add a person to a conquest
router.post('/:id/persons', async (req, res) => {
  try {
    const conquestId = parseInt(req.params.id);
    const { person_id, role_in_conquest } = req.body;
    
    if (!person_id) {
      return res.status(400).json({ message: 'Person ID is required' });
    }
    
    const conquest = await Conquest.getById(conquestId);
    if (!conquest) {
      return res.status(404).json({ message: `Conquest with ID ${conquestId} not found` });
    }
    
    const result = await Conquest.addPerson(conquestId, person_id, role_in_conquest);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error adding person to conquest', error: error.message });
  }
});

// Remove a person from a conquest
router.delete('/:conquestId/persons/:personId', async (req, res) => {
  try {
    const conquestId = parseInt(req.params.conquestId);
    const personId = parseInt(req.params.personId);
    
    const conquest = await Conquest.getById(conquestId);
    if (!conquest) {
      return res.status(404).json({ message: `Conquest with ID ${conquestId} not found` });
    }
    
    await Conquest.removePerson(conquestId, personId);
    res.status(200).json({ message: `Person with ID ${personId} removed from conquest with ID ${conquestId}` });
  } catch (error) {
    res.status(500).json({ message: 'Error removing person from conquest', error: error.message });
  }
});

module.exports = router; 