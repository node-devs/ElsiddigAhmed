const router = require('express').Router()

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: { type: String },
  phone: { type: Number },
  email: { type: String },
})

const userModel = mongoose.model('users', userSchema)

router.post('/addUser', function (req, res) {
  const data = req.body
  // insert new user
  new userModel(data).save()
  res.send('user added to the database!')
})

router.get('/getUsers', function (req, res) {
  const users = userModel.find().exec()

  users.then((data) => res.json(data))
  users.catch((err) => res.send(err))
})

router.get('/getUsers/:id', function (req, res) {
  const id = req.params.id
  const user = userModel.findById({ _id: id }).exec()
  user.then((data) => res.json(data))
  user.catch((err) => res.json(err))
})

module.exports = router
