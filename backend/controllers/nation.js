const mongoose = require('mongoose');
const axios = require('axios');

const Nations= require('../models/nation');

exports.findAll = (req, res) => {
    Nations.find({}).then((nations)=>{
        // Get List of medals and return JSON
        res.status(200).json({ nations });
    })  
}