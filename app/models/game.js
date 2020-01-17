const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
  coords: {
    type: Array,
    required: true
  },
  origBoard: {
    type: Array,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Game', gameSchema)
