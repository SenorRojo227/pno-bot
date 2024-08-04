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
            message.reply("**Version 2.0.0**\n"
                + "- You can now roll for your favorite PNO members with /roll!\n"
                + "- Use /daily to gain $10 each day.\n"
                + "- /inventory can be used to view your collected units and balance.\n"
                + "Disclaimer: This an experimental version that may be reset if major bugs are found!");
        }
    }

}

/* Version History
[Version 2.0.0]
- You can now roll for your favorite PNO members with /roll!
- Use /daily to gain $10 each day.
- /inventory can be used to view your collected units and balance.
Disclaimer: This an experimental version that may be reset if major bugs are found!
*/