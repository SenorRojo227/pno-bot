const { Schema, model } = require('mongoose');

const gachaSchema = new Schema({
    guildId: {
        type: String,
        required: true,
    },
    unit: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    rarity: {
        type: Number,
        required: true,
    },
    expansion: {
        type: String,
        required: true,
    }
});

module.exports = model("Gacha", gachaSchema);