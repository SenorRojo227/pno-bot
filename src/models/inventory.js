const { Schema, model } = require('mongoose');

const inventorySchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    units: {
        type: Array,
        default: [],
        required: false,
    },
    balance: {
        type: Number,
        default: 100,
        required: false,
    },
    lastDaily: {
        type: Date,
        required: true,
    },
    rolls: {
        type: Number,
        default: 0,
    }
});

module.exports = model("Inventory", inventorySchema);