const express = require('express')
const router = express.Router()
const Missions = require('../models/missions')

async function listMissions(req,res) {
  let missions = await Missions.find().populate('users').populate('spacecrafts').populate('destinations').exec()
  let filteredList = missions.map((item) => {
    item = {...item.toJSON()}
    return item
  })
  res.send(filteredList)
}

router.route('/')
      .get(listMissions)

module.exports = router
