const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); 
const userRoutes = require('./routes/userRoutes'); 
const alertRoutes = require('./routes/alertRoutes');
const logRoutes = require('./routes/logRoutes');
require('dotenv').config();

// Create an Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); 
app.use(bodyParser.json()); 

// Use the routes
app.use('/api/users', userRoutes); 
app.use('/api/alerts', alertRoutes); 
app.use('/api/logs', logRoutes); 

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
