const mongoose = require('mongoose');

const BrandsSchema = new mongoose.Schema({
  name: {
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

module.exports = mongoose.model('brands', BrandsSchema);