const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
  title: String,
  content: String,
  source: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  publishedAt: Date,
  url: String
  // TODO: Add more fields as needed
})

module.exports = mongoose.model('News', newsSchema)