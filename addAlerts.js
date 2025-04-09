require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');
const Alert = require('./models/alert'); // Import the Alert model

// Use the MONGO_URI from the .env file
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Connected to MongoDB');
        
        // Sample alerts
        const alerts = [
            {
                message: 'Suspicious login attempt detected',
                severity: 'high',
                timestamp: new Date(),
                protocol: 'TCP',  // Add protocol
                sourceIP: '192.168.0.1',  // Add sourceIP
                destinationIP: '192.168.1.1'  // Add destinationIP
            },
            {
                message: 'Firewall blocking potential attack',
                severity: 'medium',
                timestamp: new Date(),
                protocol: 'UDP',  // Add protocol
                sourceIP: '192.168.0.2',  // Add sourceIP
                destinationIP: '192.168.1.2'  // Add destinationIP
            },
            {
                message: 'New device connected to the network',
                severity: 'low',
                timestamp: new Date(),
                protocol: 'ICMP',  // Add protocol
                sourceIP: '192.168.0.3',  // Add sourceIP
                destinationIP: '192.168.1.3'  // Add destinationIP
            },
            {
                message: 'Unusual outgoing traffic',
                severity: 'high',
                timestamp: new Date(),
                protocol: 'TCP',  // Add protocol
                sourceIP: '192.168.0.4',  // Add sourceIP
                destinationIP: '192.168.1.4'  // Add destinationIP
            },
            {
                message: 'Virus detected in the system',
                severity: 'critical',
                timestamp: new Date(),
                protocol: 'TCP',  // Add protocol
                sourceIP: '192.168.0.5',  // Add sourceIP
                destinationIP: '192.168.1.5'  // Add destinationIP
            }
        ];
       
        await Alert.insertMany(alerts);

        console.log('Sample alerts added');
        process.exit();
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    });
