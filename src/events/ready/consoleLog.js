require('dotenv').config();
const { ActivityType } = require('discord.js');
const pjson = require('../../../package.json');

module.exports = (client) => {
    //Console Log
    console.log(client.user.tag + " is online!\n"
        + "Running version " + pjson.version + ".");

    //Set Activity
    client.user.setActivity({
        name: "your loved ones perish.",
        type: ActivityType.Watching
    });
};