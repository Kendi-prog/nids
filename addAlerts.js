require('dotenv').config(); 
const mongoose = require('mongoose');
const Alert = require('./models/alert'); 


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
                protocol: 'TCP',  
                sourceIP: '192.168.0.1', 
                destinationIP: '192.168.1.1' 
            },
            {
                message: 'Firewall blocking potential attack',
                severity: 'medium',
                timestamp: new Date(),
                protocol: 'UDP',  
                sourceIP: '192.168.0.2',  
                destinationIP: '192.168.1.2'  
            },
            {
                message: 'New device connected to the network',
                severity: 'low',
                timestamp: new Date(),
                protocol: 'ICMP',  
                sourceIP: '192.168.0.3',  
                destinationIP: '192.168.1.3'  
            },
            {
                message: 'Unusual outgoing traffic',
                severity: 'high',
                timestamp: new Date(),
                protocol: 'TCP',  
                sourceIP: '192.168.0.4',  
                destinationIP: '192.168.1.4'  
            },
            {
                message: 'Virus detected in the system',
                severity: 'critical',
                timestamp: new Date(),
                protocol: 'TCP',  
                sourceIP: '192.168.0.5',  
                destinationIP: '192.168.1.5'  
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
