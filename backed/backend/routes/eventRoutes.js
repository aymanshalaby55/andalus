const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// GET all events
router.get('/', eventController.getAllEvents);

// GET all events with location details
router.get('/with-locations', eventController.getAllEventsWithLocations);

// GET a specific event by ID
router.get('/:id', eventController.getEventById);

// POST create a new event
router.post('/', eventController.createEvent);

// PUT update an event
router.put('/:id', eventController.updateEvent);

// DELETE an event
router.delete('/:id', eventController.deleteEvent);

// GET persons involved in an event
router.get('/:id/persons', eventController.getEventPersons);

// POST add a person to an event
router.post('/:id/persons', eventController.addPersonToEvent);

// DELETE remove a person from an event
router.delete('/:eventId/persons/:personId', eventController.removePersonFromEvent);

module.exports = router; 