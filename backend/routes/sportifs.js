const express = require('express');
const axios = require('axios');
// Lodash utils library
const _ = require('lodash');

const router = express.Router();
const movieController = require("../controllers/sportif");


const sportifs = [];
// .../movies/
/* GET movies listing. */
router.get('/', sportifController.findAll);

// .../movies/86
/* GET one movie. */
router.get('/:id', sportifController.findOne);

// ..../movies/
/* PUT new movie. */
router.put('/', sportifController.addSportif);

/* DELETE movie. */
router.delete('/:id', sportifontroller.deleteOne);

/* UPDATE movie. */
router.post('/:id', sportifController.modifySportif);

module.exports = router;
