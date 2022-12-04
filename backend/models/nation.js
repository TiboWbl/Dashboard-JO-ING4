const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const nationSchema = new mongoose.Schema({
    _id: ObjectId,
    hote : { type: String, required: true },
    nations : Number,
   
}, {
    timestamps: true
}
);

const Nations = mongoose.model("Nations", nationSchema);

module.exports =  Nations;