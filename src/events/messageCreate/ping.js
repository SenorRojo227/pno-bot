const { Client, Message } = require('discord.js');

/**
 * @param {Client} client
 * @param {Message} message
 */

module.exports = (client, message) => {
    if (message.mentions.has(client.user.id)) {
        
        //Lizzie
        if (message.author.username == "rytw") {
            message.reply("I love you Lizzie!");
        } else if (message.author.username == "thunderobolt") {
            message.reply("Greetings Master Aatrox!");
        //Balance Patch
        } else {
            message.reply("**Version 1.0.2**\n"
                + "-Allowed PNO Bot to wish a user Happy Birthday with /viewBday");
        }
    }

}