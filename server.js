require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const userRoutes = require('./routes/userRoutes'); 
const alertRoutes = require('./routes/alertRoutes');
const logRoutes = require('./routes/logRoutes');


require('dotenv').config();

// Create an Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
console.log('MONGO_URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));
  
// Middleware
app.use(cors()); 
app.use(bodyParser.json()); 


app.use('/api/users', userRoutes); 
app.use('/api/alerts', alertRoutes); 
app.use('/api/logs', logRoutes); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
