const express = require('express')
const router = express.Router()
const app = express()

const { mscs } = require('../models/model');


var stateSector = require('../full_DB_Data.json')
router.get('/', async (req, res) => {
    try{
      console.log("COME HERE", stateSector.state_district_sector);
      return  res.status(200).json(stateSector.state_district_sector)
    }
    catch(err)
    {
      console.log(err);
    }
  }
  );

  


  router.get('/', (req, res) => {
    try{}catch(err){}
  })

  module.exports = router


