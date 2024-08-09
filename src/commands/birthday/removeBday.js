const { ApplicationCommandOptionType } = require('discord.js');
const Birthday = require('../../models/birthday');

module.exports = {
    name: "removebday",
    description: "Removes the user's birthday.",
    
    callback: async (client, interaction) => {
        const query = {
            userId: interaction.user.id,
            guildId: interaction.guild.id,
        };
        try {
            const user = await Birthday.findOne(query);
            if (user) {
                await Birthday.deleteOne(query);
                interaction.reply("Your birthday has been removed.");
            } else {
                interaction.reply("You do not have a birthday listed!");
            }
        } catch (error) {
            console.log("Error removing birthday: " + error);
            interaction.reply("There was an error while trying to remove the birthday. Please try again later.");
        }
    }
}