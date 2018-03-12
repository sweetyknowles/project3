require('dotenv').config()
const mongoose = require('mongoose')
//getting the models from the schema files
const User= require('../models/user')
const Projects = require('../models/projects')
const Equipments = require('../models/equipment')
// separate from the server

mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection


//will log connected with MongoDB
db.on('open', () => {
    console.log('Successfully connected to mongoDB')
})
// will log an error if not connected to MongoDB
db.on('error', (err) => {
    console.log(err)
})

const camera = new Equipment({
    name: 'Cannon 7D',
    description: 'The EOS 7D features a Canon-designed 18.0-megapixel',
     

})

const flash = new Equipment ({
    name: 'Cannon-SPEEDLITE 470EX-AI',
    description: 'World's First Flash Equipped with an AI Bounce Function',

})
const lens = new Equipment({
    name: 'Canon EF 70-200mm f/2.8L USM Autofocus Telephoto Zoom Lens',
    description:'One of the finest telephoto zoom lenses in the EF line, comparable to a single focal length lens. It has four UD-glass elements to correct chromatic aberrations.'
})

const wedding = new Project({
    name: 'Sam & Tina Wedding',
    Date:  '12-12-17',
    location: ',Manor House, United Kingom',
    Equipment: 'Canon 7d, Portrait Lens:85mm f/1.8'

    
   
})


const fashion = new Project({
    name: 'Roxette - Model',
    Date:  '4-3-12',
    location: ',Bath, United Kingom',
    Equipment: 'Canon 7d, fashion Lens:Sigma 35mm ART f/1.4'
    
})

const portrait = new Project({
    name: 'Vince - Model',
    Date:  '5-3-16',
    location: 'Nottingham, United Kingom',
    Equipment: 'Canon 7d, fashion Lens:Sigma 35mm ART f/1.4'
    
})

const user = new User({
    name: "Julio Munios",
    projects:[fashion,wedding]
     

})


//remove all old information
//returns a promise. this is asynchronise 

Projects.remove().then(() => {
    //returns another promise here. 

    return Projects.remove()
}).then(() => {
    /// build out new profiles and projects
    // and save them to the database

    return Projects.insertMany([, wedding, fashion, portrait])
}).then(() => {
    console.log('Saved succeffully')
    db.close()
}).catch((err) => {
    console.log(err)
})


