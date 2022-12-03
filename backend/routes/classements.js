const express = require('express');
const axios = require('axios');
// Lodash utils library
const _ = require('lodash');

const router = express.Router();
const classementController = require("../controllers/classement");

const classements = [];

router.get('/', classementController.findAll);

router.get('/:nom', classementController.findOne);

//router.put('/', sportifController.addSportif);

module.exports = router;