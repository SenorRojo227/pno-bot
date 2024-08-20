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
        //Tobble
        } else if (message.author.username == "thunderobolt") {
            message.reply("Greetings Master Aatrox!");
        //Balance Patch
        } else {
            message.reply("Got ideas for the bot? Feel free to ping SrRojo to share them!");
        }
    }

}