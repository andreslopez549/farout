const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required:true
  },
  password:{
   type:String,
   required:true
  },
  role: {
    type: String,
    default:"user"
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

module.exports = mongoose.model('user', UserSchema);