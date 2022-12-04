const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const audienceSchema = new mongoose.Schema({
    _id: ObjectId,
    jour : { type: String, required: true },
    USA : Number,
    GB : Number,
    France : Number,
   
}, {
    timestamps: true
}
);

const Audiences = mongoose.model("Audiences", audienceSchema);

module.exports =  Audiences;
