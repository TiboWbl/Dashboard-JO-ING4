const mongoose = require("mongoose");
const { Schema } = mongoose;

const sportifSchema = new mongoose.Schema({
    age: Number,
    nationalite: String,
    nom: String, 
    poids: Number,
    prenom: String, 
    sport: String, 
    taille: Number
}, {
    timestamps: true
}
);

const Sportifs = mongoose.model("sportifs", sportifSchema);

module.exports =  Sportifs;
