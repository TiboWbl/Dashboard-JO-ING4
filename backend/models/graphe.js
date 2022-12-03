const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const grapheSchema = new mongoose.Schema({
    _id: ObjectId,
    sport1 : { type: String, required: true },
    sport2 : String,
    sport3 : String,
    sport4 : String,
    share1: Number,
    share2: Number,
    share3: Number,
    share4: Number
}, {
    timestamps: true
}
);

const Graphes = mongoose.model("Graphes", grapheSchema);

module.exports =  Graphes;
