require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // To hash passwords
const User = require('./models/user'); // Import the User model

// Use the MONGO_URI from the .env file
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Connected to MongoDB');
        
        // Sample users with hardcoded passwords
        const hashedPassword = await bcrypt.hash('password123', 10); // Hash the password

        const users = [
            {
                username: 'admin',
                email: 'admin@example.com',
                password: hashedPassword,
                role: 'admin'
            },
            {
                username: 'user1',
                email: 'user1@example.com',
                password: hashedPassword,
                role: 'user'
            },
            {
                username: 'user2',
                email: 'user2@example.com',
                password: hashedPassword,
                role: 'user'
            }
        ];
        
        // Add users to the database
        await User.insertMany(users);

        console.log('Sample users added');
        process.exit();
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    });
