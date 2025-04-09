require('dotenv').config(); 
const mongoose = require('mongoose');
const Log = require('./models/log'); 

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Connected to MongoDB');
       
        const logs = [
            {
                message: 'User successfully logged in',
                level: 'info',
                source: 'authentication',
                timestamp: new Date()
            },
            {
                message: 'User failed to login - incorrect password',
                level: 'warn',
                source: 'authentication',
                timestamp: new Date()
            },
            {
                message: 'Critical system failure - disk space low',
                level: 'critical',
                source: 'system',
                timestamp: new Date()
            },
            {
                message: 'API request took longer than expected',
                level: 'warn',
                source: 'api',
                timestamp: new Date()
            },
            {
                message: 'System error: Could not process request',
                level: 'error',
                source: 'server',
                timestamp: new Date()
            }
        ];

        await Log.insertMany(logs);

        console.log('Sample logs added');
        process.exit(); 
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    });
