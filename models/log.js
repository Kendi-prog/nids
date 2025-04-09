const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    timestamp: { type: Date, default: Date.now },
    level: { type: String, required: true }, 
    message: { type: String, required: true },
    context: { type: String }
});

const Log = mongoose.model('Log', logSchema);

module.exports = Log;