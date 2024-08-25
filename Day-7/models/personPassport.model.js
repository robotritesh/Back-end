const mongoose = require("mongoose")

const personSchema = new mongoose.Schema({
    name:String,
    age:Number,
    address:String,
    email:String
})

const PersonModel = mongoose.model("Person",personSchema)

const passportSchema = new mongoose.Schema({
    passportNumber: String,
    country:String,
    userId:{
        type: mongoose.Schema.Types.objectId,
        ref: "Person",
    }
})

const PassportModel = mongoose.model("Passport", passportSchema)

module.exports = {PersonModel, PassportModel};