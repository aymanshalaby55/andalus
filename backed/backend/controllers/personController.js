const Person = require('../models/Person');

// Get all persons
const getAllPersons = async (req, res) => {
  try {
    const persons = await Person.getAll();
    res.status(200).json(persons);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching persons', error: error.message });
  }
};

// Get person by ID
const getPersonById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const person = await Person.getById(id);
    
    if (!person) {
      return res.status(404).json({ message: `Person with ID ${id} not found` });
    }
    
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching person', error: error.message });
  }
};

// Create a new person
const createPerson = async (req, res) => {
  try {
    const { first_name, last_name, birth_date, death_date, _role, bio, full_details } = req.body;
    
    if (!first_name) {
      return res.status(400).json({ message: 'First name is required' });
    }
    
    const newPerson = await Person.create({ 
      first_name, 
      last_name, 
      birth_date, 
      death_date, 
      _role, 
      bio, 
      full_details 
    });
    
    res.status(201).json(newPerson);
  } catch (error) {
    res.status(500).json({ message: 'Error creating person', error: error.message });
  }
};

// Update a person
const updatePerson = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { first_name, last_name, birth_date, death_date, _role, bio, full_details } = req.body;
    
    if (!first_name) {
      return res.status(400).json({ message: 'First name is required' });
    }
    
    const person = await Person.getById(id);
    if (!person) {
      return res.status(404).json({ message: `Person with ID ${id} not found` });
    }
    
    const updatedPerson = await Person.update(id, { 
      first_name, 
      last_name, 
      birth_date, 
      death_date, 
      _role, 
      bio, 
      full_details 
    });
    
    res.status(200).json(updatedPerson);
  } catch (error) {
    res.status(500).json({ message: 'Error updating person', error: error.message });
  }
};

// Delete a person
const deletePerson = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    const person = await Person.getById(id);
    if (!person) {
      return res.status(404).json({ message: `Person with ID ${id} not found` });
    }
    
    await Person.delete(id);
    res.status(200).json({ message: `Person with ID ${id} deleted successfully` });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting person', error: error.message });
  }
};

// Search persons
const searchPersons = async (req, res) => {
  try {
    const { query } = req.query;
    
    if (!query) {
      return res.status(400).json({ message: 'Search query is required' });
    }
    
    const results = await Person.search(query);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error searching persons', error: error.message });
  }
};

module.exports = {
  getAllPersons,
  getPersonById,
  createPerson,
  updatePerson,
  deletePerson,
  searchPersons
}; 