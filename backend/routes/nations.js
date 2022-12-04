const express = require('express');
const axios = require('axios');
const _ = require('lodash');

const router = express.Router();
const nationController = require("../controllers/nation");

const nations = [];

router.get('/', nationController.findAll);


module.exports = router;