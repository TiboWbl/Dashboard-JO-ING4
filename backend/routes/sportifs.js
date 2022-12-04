const express = require('express');
const axios = require('axios');
const _ = require('lodash');

const router = express.Router();
const sportifController = require("../controllers/sportif");
const sportifs = [];


router.get('/', sportifController.findAll);

router.get('/:nom', sportifController.findOne);

router.put('/', sportifController.addSportif);

router.delete('/:nom', sportifController.deleteOne);

router.post('/:nom', sportifController.modifySportif);


module.exports = router;
