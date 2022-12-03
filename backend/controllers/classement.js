const mongoose = require('mongoose');
const axios = require('axios');

const Classements = require('../models/classement');

exports.findAll = (req, res) => {
    Classements.find({}).then((classements)=>{
        // Get List of movie and return JSON
        res.status(200).json({ classements });
    })  
}

exports.findOne = (req, res) => {
    const { discipline } = req.params;
    // Find sportif which has [id] name in DB
    //console.log({ sportif: nom });
    let classements = [];
    Classements.findOne({ "discipline" : discipline })
    
    .then(test => {
        
        if(test) {
            // Return sportif
            classements.push(test);
            res.status(200).json({
                
            classements
            });
        } else {
            res.status(404).json({
            message: `classement ${discipline} not found!`
            });
        }
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: 'classement not found with id' + req.paramas.classementId
            });
        }
        
        return res.status(500).send({
            message: 'Error retrieving classement with id' + req.paramas.classementId
        });
    })

}