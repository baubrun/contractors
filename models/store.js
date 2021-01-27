const mongoose = require("mongoose")
const Schema = mongoose.Schema


const StoreSchema = new Schema({
    storeNumber: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    province: {
        type: String,
        required: true,
        trim: true
    },
    postalCode: {
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


module.exports = mongoose.model("Stores", StoreSchema)