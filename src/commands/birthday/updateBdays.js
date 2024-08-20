const { ApplicationCommandOptionType } = require('discord.js');
const Birthday = require('../../models/birthday');
const scheduleBday = require('../../utils/scheduleBday');

module.exports = {
    name: "updatebdays",
    description: "Updates all users' birthdays.",
    devOnly: true,
    
    callback: async (client, interaction) => {
        const query = {
            guildId: interaction.guild.id,
        };

        try {
            const user = await Birthday.find(query);
            for (const u of user) {
                const thisUser = await interaction.guild.members.cache.get(u.userId);
                interaction.reply("This command is not functional yet!");
                //scheduleBday(thisUser, u.month, u.day);
                //interaction.reply("All birthdays have been updated to include birthday announcements!");
            }
        } catch (error) {
            console.log("Error updating birthday: " + error);
            interaction.reply("There was an error while trying to update all birthdays. Please try again later.");
        }
    }
}