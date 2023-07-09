// models/userModel.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  fields: [{
    name: { type: String, required: true },
    value: { type: String, required: true },
  }],
});

// Pre-save hook for validation
userSchema.pre('save', function (next) {
  const email = this.email;
  const User = this.constructor;
  console.log('---pre called---: ', User);
  next();
});

const User = mongoose.model('Users', userSchema);

module.exports = User;
