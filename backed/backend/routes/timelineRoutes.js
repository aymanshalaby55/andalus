const express = require('express');
const router = express.Router();
const Timeline = require('../models/Timeline');

// Get all timeline entries
router.get('/', async (req, res) => {
  try {
    const timelineEntries = await Timeline.getAll();
    res.status(200).json(timelineEntries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching timeline entries', error: error.message });
  }
});

// Get timeline entry by ID
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const timelineEntry = await Timeline.getById(id);
    
    if (!timelineEntry) {
      return res.status(404).json({ message: `Timeline entry with ID ${id} not found` });
    }
    
    res.status(200).json(timelineEntry);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching timeline entry', error: error.message });
  }
});

// Create a new timeline entry
router.post('/', async (req, res) => {
  try {
    const { timeline_id, full_details } = req.body;
    
    if (!full_details) {
      return res.status(400).json({ message: 'Timeline details are required' });
    }
    
    const newTimelineEntry = await Timeline.create({ timeline_id, full_details });
    res.status(201).json(newTimelineEntry);
  } catch (error) {
    res.status(500).json({ message: 'Error creating timeline entry', error: error.message });
  }
});

// Update a timeline entry
router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { full_details } = req.body;
    
    if (!full_details) {
      return res.status(400).json({ message: 'Timeline details are required' });
    }
    
    const timelineEntry = await Timeline.getById(id);
    if (!timelineEntry) {
      return res.status(404).json({ message: `Timeline entry with ID ${id} not found` });
    }
    
    const updatedTimelineEntry = await Timeline.update(id, { full_details });
    res.status(200).json(updatedTimelineEntry);
  } catch (error) {
    res.status(500).json({ message: 'Error updating timeline entry', error: error.message });
  }
});

// Delete a timeline entry
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    const timelineEntry = await Timeline.getById(id);
    if (!timelineEntry) {
      return res.status(404).json({ message: `Timeline entry with ID ${id} not found` });
    }
    
    await Timeline.delete(id);
    res.status(200).json({ message: `Timeline entry with ID ${id} deleted successfully` });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting timeline entry', error: error.message });
  }
});

// Get comprehensive timeline
router.get('/comprehensive/all', async (req, res) => {
  try {
    const comprehensiveTimeline = await Timeline.getComprehensiveTimeline();
    res.status(200).json(comprehensiveTimeline);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching comprehensive timeline', error: error.message });
  }
});

module.exports = router; 