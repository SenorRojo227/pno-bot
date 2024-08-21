const { Schema, model } = require('mongoose');

const birthdaySchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    guildId: {
        type: String,
        required: true,
    },
    day: {
        type: Number,
        required: true,
    },
    month: {
        type: Number,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    cronJob: {
        type: Object,
        required: false
    }
});

module.exports = model("Birthday", birthdaySchema);