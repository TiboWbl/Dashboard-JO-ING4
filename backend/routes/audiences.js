const express = require('express');
const axios = require('axios');
const _ = require('lodash');

const router = express.Router();
const audienceController = require("../controllers/audience");

const audiences = [];

router.get('/', audienceController.findAll);


module.exports = router;
