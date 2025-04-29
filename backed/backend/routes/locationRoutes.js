const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

// GET all locations
router.get('/', locationController.getAllLocations);

// GET a specific location by ID
router.get('/:id', locationController.getLocationById);

// POST create a new location
router.post('/', locationController.createLocation);

// PUT update a location
router.put('/:id', locationController.updateLocation);

// DELETE a location
router.delete('/:id', locationController.deleteLocation);

// GET battles at a specific location
router.get('/:id/battles', locationController.getLocationBattles);

// GET events at a specific location
router.get('/:id/events', locationController.getLocationEvents);

module.exports = router; 