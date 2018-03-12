const mongoose = require('mongoose')
const Schema = mongoose.Schema
const equipmentSchema = require('./equipment')

const ProjectsSchema = new Schema({
  name: 'String',
    Date:  'number',
    location: 'String',
    Equipment: [ equipmentSchema]

  

})

module.exports = {
ProjectsSchema

}