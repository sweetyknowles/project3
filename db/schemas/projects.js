const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { equipmentSchema } = require("./equipment");

const ProjectsSchema = new Schema({
  name: String,
  date: String,
  location: String,
  Equipment: [equipmentSchema]
});

//Model
const Project = mongoose.model("Project", ProjectsSchema);

module.exports = { Project, ProjectsSchema };
