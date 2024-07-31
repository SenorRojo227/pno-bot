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
                    let member = await interaction.guild.members.fetch(u.userId);
                    embed.addFields({
                        name: member.displayName,
                        value: u.month + "/" + u.day + "/" + u.year,
                    });
                } catch (error) {
                    console.log(error);
                }
            }
            interaction.reply({embeds: [embed]});
        } catch (error) {
            console.log("Error viewing: " + error);
        }
    }
}