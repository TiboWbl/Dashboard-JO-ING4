const express = require('express');
const axios = require('axios');
const _ = require('lodash');

const router = express.Router();
const classementController = require("../controllers/classement");

const classements = [];

router.get('/', classementController.findAll);

router.get('/:discipline', classementController.findOne);


module.exports = router;