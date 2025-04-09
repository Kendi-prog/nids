const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
        enum: ['info', 'warn', 'error', 'critical'],
    },
    timestamp: {
        type: Date,
        default: Date.now, 
    },
    source: {
        type: String,
        required: true,
    }
});


const Log = mongoose.model('Log', logSchema);
module.exports = Log;
