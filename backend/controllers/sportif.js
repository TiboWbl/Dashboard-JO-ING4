const mongoose = require('mongoose');
const axios = require('axios');

const Sportifs = require('../models/sportif');

exports.findAll = (req, res) => {
    Sportifs.find({}).then((sportifs)=>{
        // Get List of movie and return JSON
        res.status(200).json({ sportifs });
    })  
}

exports.findOne = (req, res) => {
    const { nom } = req.params;
    // Find sportif which has [id] name in DB
    //console.log({ sportif: nom });
    let sportifs = [];
    Sportifs.findOne({ "nom" : nom })
    
    .then(test => {
        
        if(test) {
            // Return sportif
            sportifs.push(test);
            res.status(200).json({
                
            sportifs
            });
        } else {
            res.status(404).json({
            message: `sportif ${nom} not found!`
            });
        }
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: 'Sportif not found with id' + req.paramas.sportifId
            });
        }
        
        return res.status(500).send({
            message: 'Error retrieving sportif with id' + req.paramas.sportifId
        });
    })

}

exports.addSportif = (req, res) => {
    //const { Nom, Prenom, Age, Nationalite, Sport, Taille, Poids  } = req.params;
    console.log('prout');
    console.log(req.params);
    console.log(req.body);
    
    axios.get(url)
    .then((data) => {
        // handle success
        if(data.data){
            const newSportif = {
                // _id: _.uniqueId(), // Fait par Mongodb
                nom: Nom,
                prenom: Prenom,
                age: Age, 
                sport: Sport,
                nationalite: Nationalite, 
                taille: Taille, 
                poids: Poids
            }
            
            Sportifs.create(newSportif).then(sportif => {
                console.error(sportif);
                if(sportif) {
                    // Return validation message
                    res.status(200).json({
                        message: `Just added ${Nom}`,
                        sportif: { newSportif },
                    });
                }
            }).catch(error => {
                res.status(404).json({
                    theerror: error,
                });
            });
            
        } else {
            res.status(404).json({
                message: `Sportif not found`
            });
        }
    })
    .catch(function (error) {
        // handle error
        res.json({error, 
            sportif: Sportifs
        });
    }); 
}

exports.deleteOne = (req, res) => {
    // Get the :id of the sportif we want to delete from the params of the request
    const { nom } = req.params;
    let sportifs = [];
    
    Sportifs.deleteOne({"nom" : nom }).then((sportifs) => {
        res.status(200).json({ 
            sportifs,
            message: `${sportifs} deleted !` 
        });
    }).catch(() => {
        res.status(404).json({ 
            message: `Sportif not found !` 
        });
    })
}

// Pas encore testé
exports.modifySportif = (req, res) => {
    // Get the :id of the sportif we want to update from the params of the request
    const { id } = req.params;
    // Get the new data of the sportif we want to update from the body of the request
    const { sportif } = req.body;


    Sportifs.findByIdAndUpdate(id, { ...sportif }).then(()=> {
        // Return message
        res.json({
          message: `Sportif updated: ${sportif}`
        });
    });    
  }



