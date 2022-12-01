const express = require('express');
const axios = require('axios');
// Lodash utils library
const _ = require('lodash');

const router = express.Router();
const sportifController = require("../controllers/sportif");

const sportifs = [];

router.get('/', sportifController.findAll);

router.get('/:id', sportifController.findOne);

//router.put('/', sportifController.addSportif);

router.delete('/:id', sportifController.deleteOne);

router.post('/:id', sportifController.modifySportif);

module.exports = router;
