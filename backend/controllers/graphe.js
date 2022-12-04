const mongoose = require('mongoose');
const axios = require('axios');

const Graphes = require('../models/graphe');

exports.findAll = (req, res) => {
    Graphes.find({}).then((graphes)=>{
        res.status(200).json({ graphes });
    })  
}

