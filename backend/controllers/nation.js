const mongoose = require('mongoose');
const axios = require('axios');

const Nations= require('../models/nation');

exports.findAll = (req, res) => {
    Nations.find({}).then((nations)=>{
        res.status(200).json({ nations });
    })  
}