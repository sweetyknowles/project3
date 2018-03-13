const express = require('express')
const {User}  = require('../db/schemas/user')
const router = express.Router()


//get all users
router.get('/', (req, res) => {
  User.find().then((user) => {
    res.json(user)
  }).catch((err) =>{
    console.log(err)
  })
})

// get user by Id.

router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id
    const user = await User.findById(userId)
    res.json(user)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
})

//Create Route
router.post('/', async (req, res) => {
  try {
    const newUser = req.body
    console.log(newUser)
    const savedUser = await User.create(newUser)
    res.json(savedUser)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

//Update Route
router.put('/:id', async (req, res) => {
  try {
    const userId = req.params.id
    const updatedUser = req.body
    const savedUser = await User.findByIdAndUpdate(userId, updatedUser)
    res.json(savedUser)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

// Delete Route
router.delete('/:id', async (req, res) => {
  try {
    const userId = req.params.id
    await User.findByIdAndRemove(userId)
    res.json({
      msg: 'Successfully Deleted'
    })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})


module.exports = router