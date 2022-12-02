const express = require('express');
const axios = require('axios');
// Lodash utils library
const _ = require('lodash');

const router = express.Router();
const medalController = require("../controllers/medal");

const medals = [];

router.get('/', medalController.findAll);

router.get('/:Pays', medalController.findOne);


module.exports = router;
