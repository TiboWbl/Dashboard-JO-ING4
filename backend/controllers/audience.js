const mongoose = require('mongoose');
const axios = require('axios');

const Audiences = require('../models/audience');

exports.findAll = (req, res) => {
    Audiences.find({}).then((audiences)=>{
        res.status(200).json({ audiences });
    })  
}

