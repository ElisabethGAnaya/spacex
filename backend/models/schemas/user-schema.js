const mongoose = require('mongoose')


module.exports = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  age: { type: Number, required: true },
  profile: { type: String, required: false, default: 'user' },
  status: { type: Number, default: 1 },
  confirmation: { type: Boolean, default: false },
  enabled: { type: Boolean, default: true }
})
