require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); 
const User = require('./models/user'); 


const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Connected to MongoDB');
        
      
        const hashedPassword = await bcrypt.hash('password123', 10); 

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
        
        await User.insertMany(users);

        console.log('Sample users added');
        process.exit();
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    });
