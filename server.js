// Import required modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); // Import the database connection function
const userRoutes = require('./routes/userRoutes'); // Import user routes
require('dotenv').config(); // Load environment variables from .env file

// Create an instance of the Express application
const app = express();
const PORT = process.env.PORT || 5000; // Set the port to listen on

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies

// Define routes
app.use('/api/users', userRoutes); // Use user routes for /api/users endpoint

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});