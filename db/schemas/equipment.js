const mongoose = require('mongoose')
const profileSchema = require('./profileSchema')
const Schema = mongoose.Schema


const equipmentSchema = new Schema({
 
  name: 'String',
    description:'String', 

  
})

module.exports = equipmentSchema