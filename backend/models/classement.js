const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const classementSchema = new mongoose.Schema({
    discipline: { type: String, required: true },
    _id: ObjectId,
    nationalite: String,
    sportif: String,
    temps1: String,
    nationalite2: String, 
    sportive: String, 
    temps2: String
}, 
{
    timestamps: true
}
);

const Classements = mongoose.model("Classements", classementSchema);

module.exports =  Classements;