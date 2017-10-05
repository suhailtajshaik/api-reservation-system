'use strict';

const express = require('express');
const router = express.Router();
let config = require('../../config.js');

router.get('/reservation', (req, res) => {
  console.log('i am Logedin');
  let test = [];
  test.push({ "reservation": 'reservation route' })
  res.status(200).json(test);
});

router.get('/reservation/:id', (req, res) => {
  console.log('req.params.id');
  let data = {
    "id": req.params.id,
    "reservation": 'reservation by Id route'
  };
  res.status(200).json(data);
});

router.get('/reservations', (req, res) => {
  console.log('i am Logedin');
  let test = [];
  test.push({ "api": "Get all reservations" })
  res.status(200).json(test);
});



module.exports = router;