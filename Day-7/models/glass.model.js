const mongoose = require("mongoose")

const glassSchema = mongoose.Schema({
    color: String,
    material: String,
    size: Number,
    brand: {type:String, required:true}
},{
    versionKey: false
})

const GlassModel = mongoose.model("glass",glassSchema)

module.exports = GlassModel