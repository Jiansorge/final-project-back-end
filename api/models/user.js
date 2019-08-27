const mongoose = require('mongoose')
const Assignments = require('./assignments')

const schema = mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: String,
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    min: 8
  },
  admin: {
    type: Boolean,
    default: false
  },
  assignments: [Assignments]
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = mongoose.model('User', schema)
