const express = require('express');
const Log = require('../models/log'); 
const router = express.Router();


router.get('/api/logs', async (req, res) => {
    try {
        const logs = await Log.find(); 
        res.status(200).json({logs}); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;
