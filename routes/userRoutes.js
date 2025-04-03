const express = require('express');
const router = express.Router();

// In-memory data for users (custom data instead of using MongoDB)
let users = [];  // This will hold user data in an array

// POST /api/users - Register a new user
router.post('/', (req, res) => {
    const { username, email, password } = req.body;

    // Basic validation
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the user already exists (by email)
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user (without using a database, just an in-memory array)
    const newUser = {
        id: users.length + 1, // Simple id assignment (incremental)
        username,
        email,
        password,  // In real applications, the password should be hashed
    };

    // Add the new user to the in-memory array
    users.push(newUser);

    // Respond with the created user (excluding the password)
    res.status(201).json({
        message: 'User created successfully',
        user: {
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
        },
    });
});

module.exports = router;
