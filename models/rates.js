const mongoose = require("mongoose")
const Schema = mongoose.Schema

const RateSchema = new Schema({
    assemblySku: {
        type: String,
        required: true,
        trim: true
    },
    itemDescription: {
        type: String,
        required: true,
        trim: true
    },
    itemSku: {
        type: String,
        required: true,
        trim: true
    },
    pricing: {
        type: Number,
        required: true
    },

})


module.exports = mongoose.model("Rates", RateSchema)