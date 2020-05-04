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

// update user تعديل بيانات المستخدم
router.put('/updateUser/:id', function (req, res) {
  const id = req.params.id
  const data = req.body

  const user = userModel.findOneAndUpdate({ _id: id }, { $set: data }).exec()

  user.then(() => res.send('User updated successfully'))
  user.catch((err) => res.json(err))
})

router.delete('/deleteUser/:id', function (req, res) {
  const id = req.params.id
  const user = userModel.findByIdAndDelete({ _id: id }).exec()
  user.then(() => res.send('user deleted successfully'))
  user.catch((err) => res.json(err))
})

module.exports = router
