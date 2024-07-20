const { EmbedBuilder } = require('discord.js');
const Birthday = require('../../models/birthday');

module.exports = {
    name: "nextbday",
    description: "Shows a list of all birthdays.",
    
    callback: async (client, interaction) => {
        const query = {
            guildId: interaction.guild.id,
        };
        try {
            const user = await Birthday.find(query).sort({month: 1});
            const embed = new EmbedBuilder()
                .setTitle("Birthdays");
            
        } catch (error) {
            console.log("Error viewing: " + error);
        }
    }
}