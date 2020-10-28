const mongoose = require('mongoose')

module.exports = new mongoose.Schema({
  name: { type: String, required: true },
  depart: { type: Number, required: false },
  return: { type: Number, required: false },
  description: { type: String, required: false },
  state: { type: String, required: false, default: 'pending' },
  user: [{
    type:mongoose.Schema.Types.ObjectId, ref:'users'
  }],
  spacecraft: {
    type:mongoose.Schema.Types.ObjectId, ref:'spacescrafts'
  },
  destination: {
    type:mongoose.Schema.Types.ObjectId, ref:'destinations'
  }
})
