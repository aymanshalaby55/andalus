const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

// GET all persons
router.get('/', personController.getAllPersons);

// GET a specific person by ID
router.get('/:id', personController.getPersonById);

// POST create a new person
router.post('/', personController.createPerson);

// PUT update a person
router.put('/:id', personController.updatePerson);

// DELETE a person
router.delete('/:id', personController.deletePerson);

// GET search persons
router.get('/search', personController.searchPersons);

module.exports = router; 