const { EmbedBuilder } = require('discord.js');
const Birthday = require('../../models/birthday');

module.exports = {
    name: "viewbdaylist",
    description: "Shows a list of all birthdays.",
    
    callback: async (client, interaction) => {
        const query = {
            guildId: interaction.guild.id,
        };
        try {
            const users = await Birthday.find(query).sort('month day');
            const embed = new EmbedBuilder()
                .setTitle("Birthdays");
            for (const u of users) {
                try {
                    const member = await interaction.guild.members.cache.get(u.userId);
                    const date = new Date(u.year, u.month - 1, u.day);
                    const options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      };
                    embed.addFields({
                        name: member.displayName,
                        value: date.toLocaleDateString(undefined, options),
                    });
                } catch (error) {
                    console.log(error);
                }
            }
            interaction.reply({embeds: [embed]});
        } catch (error) {
            console.log("Error viewing: " + error);
            interaction.reply("There was an error while trying to view the list of birthdays. Please try again later.");
        }
    }
}