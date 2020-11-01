const mongoose = require("mongoose")

const dataSchema = mongoose.Schema({
    name: String,
    userID: String,
    money: Number,
    lb: String,
    xpp: Number,
    xpl: Number,
    daily: Number,
    begtimer: Number,
    robtimer: Number,
    warns: Number

})

module.exports = mongoose.model("Data" , dataSchema)