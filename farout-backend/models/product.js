const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  sku: {
    type: String,
    required: true,
    unique: true
  },
  currency: {
    type: String,
    default: "INR"
  },
  discription: {
    type: String,
    required: false
  },
  brand: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  inventory: {
    type: Number,
    default: 0
  },
  images: {
    type: Array,
    default: []
  },
  categories: {
    type: Array,
    default: []
  },
  type:{
    type: String,
    required: false,
  },
  variants: {
    type: Array,
    default: []
  },
  Maxshipping: {
    type: Boolean,
    default: true,
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

module.exports = mongoose.model('product', ProductSchema);