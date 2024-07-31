const { Schema, model } = require('mongoose');

const gachaSchema = new Schema({
    member: {
        type: String,
        required: true,
    },
    guildId: {
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