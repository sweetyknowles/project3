const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ProjectsSchema = new Schema({
  name: 'String',
    Date:  'number',
    location: 'String',
    Equipment: [ projectsSchema]

  

})

module.exports = {
ProjectsSchema,
equipmentSchema
}