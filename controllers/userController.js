const express = require("express");
const User = require("../db/schemas/user");
const router = express.Router();

UserModel = User.User;

//get all users
router.get("/", (req, res) => {
  UserModel.find()
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      console.log(err);
    });
});

// get user by Id.

router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UserModel.findById(userId);
    res.json(user);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

//Create new user
router.post("/", async (req, res) => {
  try {
    const newUser = req.body;
    console.log(newUser);
    const savedUser = await UserModel.create(newUser);
    res.json(savedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Update User
router.put("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(userId);
    const updatedUser = req.body;
    const savedUser = await UserModel.findByIdAndUpdate(userId, updatedUser);
    res.json(savedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Delete User
router.delete("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    await UserModel.findByIdAndRemove(userId);
    res.json({
      msg: "Successfully Removed"
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
