const { Schema, model } = require('mongoose');

const inventorySchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    guildId: {
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
    }
});

module.exports = model("Inventory", inventorySchema);