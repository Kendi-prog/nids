const express = require('express');
const router = express.Router();

// Sample data (replace this with data from your database later)
const logs = [
    { message: 'Login attempt failed', date: new Date() },
    { message: 'Server started', date: new Date() }
];

// GET /api/logs - Fetch all logs
router.get('/', (req, res) => {
    res.json({ logs });
});

module.exports = router;
