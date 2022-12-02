const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const medalSchema = new mongoose.Schema({
    _id: ObjectId,
    Pays : { type: String, required: true },
    Total_medailles : Number,
    Or : Number,
    Argent : Number,
    Bronze : Number,
    Classement : Number
}, {
    timestamps: true
}
);

const Medals = mongoose.model("Medals", medalSchema);

module.exports =  Medals;
