const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },

  status: {
    type: Boolean,
    default: true,
  },
  datecreated: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('category', CategorySchema);