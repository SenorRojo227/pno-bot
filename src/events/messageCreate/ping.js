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
            message.reply("**Version 1.0.3**\n"
                + "- /nextBday can now be used to view the next upcoming birthday.\n"
                + "- /viewAllBdays can now be used to view all birthdays listed.");
        }
    }

}