// routes/userRoutes.js

const express = require('express');
const router = express.Router();

// Sample data (replace this with your in-memory data structure or database in the future)
let users = [
    { id: 1, username: 'JohnDoe', email: 'john@example.com' },
    { id: 2, username: 'JaneDoe', email: 'jane@example.com' }
];

// GET /api/users - Fetch all users
router.get('/', (req, res) => {
    res.json({ users });
});

module.exports = router;

