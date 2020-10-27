const mongoose = require('mongoose')


module.exports = new mongoose.Schema({
  name: { type: String, required: true },
  load: { type: Number, required: false },
  passangers: { type: Number, required: false },
  depart: { type: Number, required: false },
  return: { type: Number, required: false },
  description: { type: String, required: false },
  state: { type: String, required: false, default: 'pending' },
  user: {
    id: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true }
  },
  spacecraft: [{
    id: { type: String, required: true },
    name: { type: String, required: true },
    max_load: { type: Number, required: true },
    passangers: { type: Number, required: true }
  }],
  destination: [{
    id: { type: String, required: true },
    name: { type: String, required: true },
    _length: { type: Number, required: false }
  }]
})
