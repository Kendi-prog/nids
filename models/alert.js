const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  sourceIP: {
    type: String,
    required: true,
  },
  destinationIP: {
    type: String,
    required: true,
  },
  protocol: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  severity: {
    type: String,
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'medium',
  },
});

module.exports = mongoose.model('Alert', alertSchema);
