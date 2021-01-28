const mongoose = require("mongoose")
const Schema = mongoose.Schema


const JobSchema = new Schema({
    firstName: {
        type: String,
        // required: true,
        trim: true
    },
    lastName: {
        type: String,
        // required: true,
        trim: true
    },
    storeNumber: {
        type: String,
        // required: true,
        trim: true
    },
    PO: {
        type: Number,
        // required: true,
        trim: true
    },
    date: {
        type: Date,
        // required: true,
    },
    notes: {
        type: String,
        // required: true,
        trim: true,
    },
    items: [{
        itemDescription: {
            type: String,
            // required: true,
        },
        assemblySku: {
            type: String,
            // required: true,

        },
        itemSku: {
            type: String,
            // required: true,

        },
        qty: {
            type: Number,
            // required: true,
        }
    }],
})


module.exports = mongoose.model("Jobs", JobSchema)