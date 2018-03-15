const express = require("express");
const SchemaAndModel = require("../db/schemas/user");
const Projects = require("../db/schemas/projects");
// Merging Params allows  to read any route params declared in server.js
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
//create new project
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

//get projects by ID.
router.get("/:id", async (req, res) => {
  console.log("This is  Show Route");
  try {
    const userId = req.params.userId;
    console.log("USER ID", userId);
    const user = await UserModel.findById(userId);
    console.log("USER", user);

    const project = user.projects.id(req.params.id);
    res.json(project);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

//Delete Projects

router.delete("/:id", (req, res) => {
  UserModel.findById(req.params.userid)
    .then(user => {
      const project = user.projects.id(req.params.id);
      console.log("this is project test", project);
      project.remove();
      return user.save();
    })
    .then(() => {
      res.json("THE PROJECT DELETED");
    });
});

module.exports = router;
