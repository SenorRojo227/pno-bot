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
            const users = await Birthday.find(query).sort({month: 1});
            const embed = new EmbedBuilder()
                .setTitle("Birthdays");
            for (let u of users) {
                let displayName = client.users.cache.get(u.userId).displayName;
                embed.addFields({
                    name: displayName,
                    value: u.month + "/" + u.day + "/" + u.year,
                });
            }
            interaction.reply({embeds: [embed]});
        } catch (error) {
            console.log("Error viewing: " + error);
        }
    }
}