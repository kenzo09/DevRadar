const monoose = require('mongoose')
const PointSchema = require('./types/PointSchema')

const DevSchema = new monoose.Schema({
  name: String,
  githubUsername: String,
  bio: String,
  avatarUrl: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: '2dsphere'
  }
})

module.exports = monoose.model('Dev', DevSchema)