const express = require('express');
const axios = require('axios');
// Lodash utils library
const _ = require('lodash');

const router = express.Router();
const grapheController = require("../controllers/graphe");

const graphes = [];

router.get('/', grapheController.findAll);


module.exports = router;
