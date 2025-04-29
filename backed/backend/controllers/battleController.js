const Battle = require('../models/Battle');

// Get all battles
const getAllBattles = async (req, res) => {
  try {
    const battles = await Battle.getAll();
    res.status(200).json(battles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching battles', error: error.message });
  }
};

// Get all battles with location details
const getAllBattlesWithLocations = async (req, res) => {
  try {
    const battles = await Battle.getAllWithLocations();
    res.status(200).json(battles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching battles with locations', error: error.message });
  }
};

// Get battle by ID
const getBattleById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const battle = await Battle.getById(id);
    
    if (!battle) {
      return res.status(404).json({ message: `Battle with ID ${id} not found` });
    }
    
    res.status(200).json(battle);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching battle', error: error.message });
  }
};

// Create a new battle
const createBattle = async (req, res) => {
  try {
    const { battle_name, battle_date, description, location_id } = req.body;
    
    if (!battle_name) {
      return res.status(400).json({ message: 'Battle name is required' });
    }
    
    const newBattle = await Battle.create({ battle_name, battle_date, description, location_id });
    res.status(201).json(newBattle);
  } catch (error) {
    res.status(500).json({ message: 'Error creating battle', error: error.message });
  }
};

// Update a battle
const updateBattle = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { battle_name, battle_date, description, location_id } = req.body;
    
    if (!battle_name) {
      return res.status(400).json({ message: 'Battle name is required' });
    }
    
    const battle = await Battle.getById(id);
    if (!battle) {
      return res.status(404).json({ message: `Battle with ID ${id} not found` });
    }
    
    const updatedBattle = await Battle.update(id, { battle_name, battle_date, description, location_id });
    res.status(200).json(updatedBattle);
  } catch (error) {
    res.status(500).json({ message: 'Error updating battle', error: error.message });
  }
};

// Delete a battle
const deleteBattle = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    const battle = await Battle.getById(id);
    if (!battle) {
      return res.status(404).json({ message: `Battle with ID ${id} not found` });
    }
    
    await Battle.delete(id);
    res.status(200).json({ message: `Battle with ID ${id} deleted successfully` });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting battle', error: error.message });
  }
};

// Get persons involved in a battle
const getBattlePersons = async (req, res) => {
  try {
    const battleId = parseInt(req.params.id);
    
    const battle = await Battle.getById(battleId);
    if (!battle) {
      return res.status(404).json({ message: `Battle with ID ${battleId} not found` });
    }
    
    const persons = await Battle.getBattlePersons(battleId);
    res.status(200).json(persons);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching persons for battle', error: error.message });
  }
};

// Add a person to a battle
const addPersonToBattle = async (req, res) => {
  try {
    const battleId = parseInt(req.params.id);
    const { person_id, role_in_battle } = req.body;
    
    if (!person_id) {
      return res.status(400).json({ message: 'Person ID is required' });
    }
    
    const battle = await Battle.getById(battleId);
    if (!battle) {
      return res.status(404).json({ message: `Battle with ID ${battleId} not found` });
    }
    
    const result = await Battle.addPerson(battleId, person_id, role_in_battle);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error adding person to battle', error: error.message });
  }
};

// Remove a person from a battle
const removePersonFromBattle = async (req, res) => {
  try {
    const battleId = parseInt(req.params.battleId);
    const personId = parseInt(req.params.personId);
    
    const battle = await Battle.getById(battleId);
    if (!battle) {
      return res.status(404).json({ message: `Battle with ID ${battleId} not found` });
    }
    
    await Battle.removePerson(battleId, personId);
    res.status(200).json({ message: `Person with ID ${personId} removed from battle with ID ${battleId}` });
  } catch (error) {
    res.status(500).json({ message: 'Error removing person from battle', error: error.message });
  }
};

module.exports = {
  getAllBattles,
  getAllBattlesWithLocations,
  getBattleById,
  createBattle,
  updateBattle,
  deleteBattle,
  getBattlePersons,
  addPersonToBattle,
  removePersonFromBattle
}; 