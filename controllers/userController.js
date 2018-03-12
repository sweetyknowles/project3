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

module.exports = router