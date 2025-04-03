const express = require('express');
const router = express.Router();

// Sample data (replace this with data from your database later)
const alerts = [
    { message: 'Suspicious activity detected', severity: 'High', date: new Date() },
    { message: 'Unusual network traffic', severity: 'Medium', date: new Date() }
];

// GET /api/alerts - Fetch all alerts
router.get('/', (req, res) => {
    res.json({ alerts });
});

module.exports = router;
