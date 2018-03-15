require("dotenv").config();
const mongoose = require("mongoose");
//getting the models from the schema files
const { User } = require("./schemas/user");
const { Project } = require("./schemas/projects");
const { Equipment } = require("./schemas/equipment");
// separate from the server

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;

//will log connected with MongoDB
db.on("open", () => {
  console.log("Successfully connected to mongoDB");
});
// will log an error if not connected to MongoDB
db.on("error", err => {
  console.log(err);
});

const camera = new Equipment({
  name: "Cannon 7D",
  description: "The EOS 7D features a Canon-designed 18.0-megapixel"
});

const flash = new Equipment({
  name: "Cannon-SPEEDLITE 470EX-AI",
  description: "First Flash Equipped with an AI Bounce Function"
});
const lens = new Equipment({
  name: "Canon EF 70-200mm f/2.8L USM Autofocus Telephoto Zoom Lens",
  description:
    "One of the finest telephoto zoom lenses in the EF line, comparable to a single focal length lens. It has four UD-glass elements to correct chromatic aberrations."
});

const wildlens = new Equipment({
  name: "Canon EF 70-300mm f/2.8L USM Autofocus Telephoto Zoom Lens",
  description:
    "One of the finest telephoto zoom lenses in the EF line, comparable to a single focal length lens. It has four UD-glass elements to correct chromatic aberrations."
});

const wedding = new Project({
  name: "Sam & Tina Wedding",
  Date: "12-12-17",
  location: "Manor House, United Kingom",
  Equipment: [camera]
});

const fashion = new Project({
  name: "Roxette - Model",
  Date: "4-3-12",
  location: ",Bath, United Kingom",
  Equipment: [lens, camera]
});

const wildlife = new Project({
  name: "Vince - Model",
  Date: "5-3-16",
  location: "Nottingham, United Kingom",
  Equipment: [wildlens, camera]
});

const julio = new User({
  name: "Julio Munios",
  projects: [wedding]
});

const alicia = new User({
  name: "Alicia Marquee",
  location: "Madrid, Spain",
  Date: "12.12.13",
  projects: [wildlife, wedding]
});

User.remove({})
  .then(() => julio.save())
  .then(() => alicia.save())
  .then(() => console.log("SAVED!"))
  .then(() => mongoose.connection.close())
  .catch(err => console.log(err));
