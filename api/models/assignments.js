const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: String,
  grade: Number,
  max_grade: Number
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = schema
