const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const fs = require('fs');

const app = express()

const { mscs } = require('../models/model');

const Data = require(
    '../models/model'
).mscs



var json = require('../full_DB_Data.json')
router.get('/', async (req, res) => {
    try{
        res.json(json.registration_counts)
    }catch(err){
        console.error(err)
    }
  })

  module.exports = router