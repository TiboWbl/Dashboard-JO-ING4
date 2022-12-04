const mongoose = require('mongoose');
const axios = require('axios');

const Medals = require('../models/medal');

exports.findAll = (req, res) => {
    Medals.find({}).then((medals)=>{
        res.status(200).json({ medals });
    })  
}

exports.findOne = (req, res) => {
    const { Pays } = req.params;
    let medals = [];
    Medals.findOne({ "Pays" : Pays })
    
    .then(test => {
        
        if(test) {
            medals.push(test);
            res.status(200).json({
                
            medals
            });
        } else {
            res.status(404).json({
            message: `medal ${id} not found!`
            });
        }
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: 'Medal not found with id' + req.paramas.medalId
            });
        }
        
        return res.status(500).send({
            message: 'Error retrieving medal with id' + req.paramas.medalId
        });
    })

}
