const mongoose = require('mongoose');

const AttributeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    units:{type: Array,
    default: []},

});

module.exports = mongoose.model('attributes', AttributeSchema);