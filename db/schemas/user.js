const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ProjectsSchema} = require('./projects')


const UserSchema = new Schema({
  name: String,
  Date: String,
  location: String,
  projects:[ProjectsSchema]

})
//Model
const User = mongoose.model('User', UserSchema )

module.exports = {
  User, 
  UserSchema
}
