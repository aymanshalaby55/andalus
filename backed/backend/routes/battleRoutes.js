const express = require('express');
const router = express.Router();
const battleController = require('../controllers/battleController');

// GET all battles
router.get('/', battleController.getAllBattles);

// GET all battles with location details
router.get('/with-locations', battleController.getAllBattlesWithLocations);

// GET a specific battle by ID
router.get('/:id', battleController.getBattleById);

// POST create a new battle
router.post('/', battleController.createBattle);

// PUT update a battle
router.put('/:id', battleController.updateBattle);

// DELETE a battle
router.delete('/:id', battleController.deleteBattle);

// GET persons involved in a battle
router.get('/:id/persons', battleController.getBattlePersons);

// POST add a person to a battle
router.post('/:id/persons', battleController.addPersonToBattle);

// DELETE remove a person from a battle
router.delete('/:battleId/persons/:personId', battleController.removePersonFromBattle);

module.exports = router; 