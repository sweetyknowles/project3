const express = require('express')
const User = require('../schema/user')
const Projects = require('../schema/projects')
// DONT FORGET THE MERGE PARAMS. This allows you to read any
// route params declared in server.js
const router = express.Router({ mergeParams: true })

router.post('/', (req, res) => {
  console.log(req.params.userId)
  User.findById(req.params.userId).then((user) => {
    const newProject = new Project({})
    user.projects.push(newProjects)
    return user.save()
  }).then((savedUser) => {
    res.send(savedUser)
  })
})

router.patch('/:id', (req, res) => {
  User.findById(req.params.userId).then((user) => {
    const projectorToUpdate = user.ideas.id(req.params.id)
    projectorToUpdate.title = req.body.title
    projectorToUpdate.description = req.body.description
    return user.save()
  }).then((savedUser) => {
    res.send(savedUser)
  })
})

router.delete('/:id', (req, res) => {
  User.findById(req.params.userId).then((user) => {
    user.projector.id(req.params.id).remove()
    return user.save()
  }).then((savedUser) => {
    res.send(savedUser)
  })
})

module.exports = router
