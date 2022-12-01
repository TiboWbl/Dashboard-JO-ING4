const mongoose = require("mongoose");
const { Schema } = mongoose;

const sportifSchema = new mongoose.Schema({
    age: Number,
    nationalite: String,
    nom: { type: String, required: true },
    poids: Number,
    prenom: String, 
    sport: String, 
    taille: Number
}, {
    timestamps: true
}
);

const Sportifs = mongoose.model("Sportifs", sportifSchema);

module.exports =  Sportifs;
