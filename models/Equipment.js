const mongoose = require('mongoose')
const equipment = require('../db/schemas/equipment.js')


const Equipments = mongoose.model('Equipment', equipment)

module.exports = Equipments