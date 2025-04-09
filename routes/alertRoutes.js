const express = require('express');
const Alert = require('../models/alert');
const router = express.Router();

// GET /api/alerts - Fetch all alerts from the database
router.get('/', async (req, res) => {
    try {
        const alerts = await Alert.find();
        res.status(200).json(alerts);  
    } catch (error) {
        console.error('Error fetching alerts:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;

