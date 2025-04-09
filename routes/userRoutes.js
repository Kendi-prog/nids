const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Import the User model

// Route to fetch all users from the database
router.get('/', async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users
        res.status(200).json(users); // Return the users as JSON
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
});

module.exports = router;



