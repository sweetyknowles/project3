const mongoose = require('mongoose')
const Schema = mongoose.Schema
const project = require('./projects')


const User = new Schema({
  name: String,
  projects:[ project ]

})

module.exports = User
