const express = require('express')
const router = express.Router()
const Missions = require('../models/missions')


async function listMissions(req,res) {
  let missions = await Missions.find().populate('users', 'spacecrafts', 'destinations').exec()
  let filteredList = missions.map((item) => {
    item = {...item.toJSON()}
    return item
  })
  res.send(filteredList)
}


async function createMission(req,res) {
  try {
    let newMission = await new Missions(req.body).populate('users', 'spacecrafts', 'destinations').save()
    let createdMission = newMission.toJSON()
    res.status(201).json(createdMission)
  } catch (e) {
    console.info(e)
  }
}


async function getMission(req,res){
  let id = req.params.id
  const mission = await Missions.findById({_id:id}).populate('users', 'spacecrafts', 'destinations').exec()
  if(!mission){
    res.status(404).json({message: "Mission not found"})
  }
  res.json(mission)
}


async function deleteMission(req,res){
  let id = req.params.id

  try {
    let deleted = await Missions.findOneAndDelete({_id: id}).populate('users', 'spacecrafts', 'destinations')
    res.json({message: "Mission was successfully deleted"})
  } catch (e) {
    console.info(e)
    res.status(404).json({ message: "Mission not found or cant' be deleted"})
  }
}


async function updateMission(req, res) {
  let missionId = req.params.id

  let updatedMission = req.body

  let updatedItem = await Missions.findOneAndUpdate({ _id: missionId }, updatedMission).populate('users', 'spacecrafts', 'destinations').exec()

  if(updatedItem) {
    res.json(updatedMission)
  }

  if (!updatedItem) {
    res.status(404).json({ message: "Mission not found" })
  }
}

router.route('/')
      .get(listMissions)
      .post(createMission)


router.route('/:id')
      .get(getMission)
      .put(updateM)
      .delete(deleteMission)

module.exports = router
