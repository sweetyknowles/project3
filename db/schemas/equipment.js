const mongoose = require("mongoose");
//const projectsSchema = require('./projects')
const Schema = mongoose.Schema;

const equipmentSchema = new Schema({
  name: "String",
  description: "String"
});

//MODEL
const Equipment = mongoose.model("Equipment", equipmentSchema);

module.exports = { Equipment, equipmentSchema };
