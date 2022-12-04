const mongoose = require('mongoose');
const axios = require('axios');

const Sportifs = require('../models/sportif');

exports.findAll = (req, res) => {
    Sportifs.find({}).then((sportifs)=>{
        res.status(200).json({ sportifs });
    })  
}

exports.findOne = (req, res) => {
    const { nom } = req.params;
    let sportifs = [];
    Sportifs.findOne({ "nom" : nom })
    
    .then(test => {
        
        if(test) {
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
    console.log('prout');
    console.log(req.params);
    console.log(req.body);
    
    axios.get(url)
    .then((data) => {
        if(data.data){
            const newSportif = {
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
        res.json({error, 
            sportif: Sportifs
        });
    }); 
}

exports.deleteOne = (req, res) => {
    const { nom } = req.params;
    
    Sportifs.deleteOne({ "nom" : nom }).then((sportifs) => {
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

exports.modifySportif = (req, res) => {
    const { id } = req.params;
    const { sportif } = req.body;


    Sportifs.findByIdAndUpdate(id, { ...sportif }).then(()=> {
        res.json({
          message: `Sportif updated: ${sportif}`
        });
    });    
  }



