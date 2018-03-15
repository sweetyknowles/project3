const express = require("express");
const SchemaAndModel = require("../db/schemas/user");
const Projects = require("../db/schemas/projects");
// MERGE PARAMS. This allows  to read any
// route params declared in server.js
const router = express.Router({ mergeParams: true });

const UserModel = SchemaAndModel.User;
const ProjectModel = Projects.Project;

router.get("/", (req, res) => {
  // console.log(req.params.id)
  // console.log(UserModel)
  UserModel.findById(req.params.id)
    .then(user => {
      project = user.projects;
      res.json(project);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
  //console.log(req.params.userId)
  UserModel.findById(req.params.id)
    .then(user => {
      const newProject = new ProjectModel(req.body);
      const project = user.projects;
      console.log(project);
      user.projects.push(newProject);
      return user.save();
    })
    .then(savedUser => {
      res.json(savedUser);
    });
});



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

// router.delete('/:id', (req, res) => {
//   User.findById(req.params.userId).then((user) => {
//     user.projector.id(req.params.id).remove()
//     return user.save()
//   }).then((savedUser) => {
//     res.send(savedUser)
//   })
// })

module.exports = router;
