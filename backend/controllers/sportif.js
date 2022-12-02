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

/*exports.addMovie = (req, res) => {
    // Get the data from request from request
    const { movie } = req.body;
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=94da689c&t=${movie}`;
    
    // Make a request for a movie
    axios.get(url)
    .then((data) => {
        // handle success
        if(data.data){
            const {Title, Year, Runtime, Actors, Poster, BoxOffice, Ratings} = data.data;
            const newMovie = {
                // _id: _.uniqueId(), // Fait par Mongodb
                movie: Title,
                yearOfRelease: Year,
                duration: Runtime, // en minutes,
                actors: Actors,
                poster: Poster, // lien vers une image d'affiche,
                boxOffice: BoxOffice, // en USD$,
                rottenTomatoesScore: Ratings && Ratings[1].Value
            }
            
            Movies.create(newMovie).then(movie => {
                console.error(movie);
                if(movie) {
                    // Return validation message
                    res.status(200).json({
                        message: `Just added ${Title}`,
                        movie: { newMovie },
                    });
                }
            }).catch(error => {
                res.status(404).json({
                    theerror: error,
                });
            });
            
        } else {
            res.status(404).json({
                message: `Movie not found`
            });
        }
    })
    .catch(function (error) {
        // handle error
        res.json({error, 
            movie: Movies
        });
    }); 
}*/

// Pas testé
exports.deleteOne = (req, res) => {
    // Get the :id of the sportif we want to delete from the params of the request
    const { id } = req.params;
    
    Sportifs.deleteOne({ _id: id }).then((sportif) => {
        res.status(200).json({ 
            sportif,
            message: `${sportif} deleted !` 
        });
    }).catch(() => {
        res.status(404).json({ 
            message: `Sportif not found !` 
        });
    })
}

// Pas testé
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



