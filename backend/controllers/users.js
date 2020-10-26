const express = require('express')
const router = express.Router()
const Users = require('../models/users')
const sha512 = require('js-sha512')


async function listUsers(req,res) {
  let users = await Users.find().exec()
  let filteredList = users.map((item) => {
    item = {...item.toJSON()}
    delete item.password
    return item
  })
  res.send(filteredList)
}



async function createUser(req,res) {
  req.body.password = sha512(req.body.password)

  try {
    let newUser = await new Users(req.body).save()
    let createdUser = newUser.toJSON()
    delete createdUser.password
    res.status(201).json(createdUser)
  } catch (e) {
    console.info(e)
  }
}


async function getUser(req,res){
  let id = req.params.id
  const user = await Users.findById({_id:id}).exec()
  if(!user){
    res.status(404).json({message: "user not found"})
  }
  res.json(user)
}

async function deleteUser(req,res){
  let id = req.params.id

  try {
    let deleted = await Users.findOneAndDelete({_id: id})
    res.json({message: "User was successfully deleted"})
  } catch (e) {
    console.info(e)
    res.status(404).json({ message: "user not found or cant' be deleted"})
  }
}


router.route('/')
      .get(listUsers)
      .post(createUser)



router.route('/:id')
      .get(getUser)
      .delete(deleteUser)

module.exports = router
