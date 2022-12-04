const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const grapheSchema = new mongoose.Schema({
    _id: ObjectId,
    sport1 : { type: String, required: true },
    sport2 : String,
    sport3 : String,
    sport4 : String,
    sport6 : String,
    sport7 : String,
    sport8 : String,
    sport11 : String,
    share1: String,
    share2: String,
    share3: String,
    share4: String,
    share6: String,
    share7: String,
    share8: String,
    share11: String
}, {
    timestamps: true
}
);

const Graphes = mongoose.model("Graphes", grapheSchema);

module.exports =  Graphes;
