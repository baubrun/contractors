const mongoose = require("mongoose")
const Schema = mongoose.Schema


const ItemSchema = new Schema({
    assemblySku: {
        type: String,
        required: true,
        trim: true
    },
    cost: {
        type: Number,
        required: true
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
    tier: {
        type: String,
        required: true,
        trim: true
    },

})


module.exports = mongoose.model("Items", ItemSchema)