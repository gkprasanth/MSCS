const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const fs = require('fs');

const app = express()

const { mscs } = require('../models/model');



router.get('/', async (req, res) => {
    try{
        console.log("CAME HERE");
  
        let totalData = await mscs.find({});
  
        res.json({
            status : "SUCCESS",
            data : totalData,
        })
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


