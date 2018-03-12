const mongoose = require('mongoose')
const user = require('../db/schemas/user.js')

const User = mongoose.model('User', user )

module.exports = User