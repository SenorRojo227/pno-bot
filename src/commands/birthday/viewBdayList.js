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
            //const memberList = client.guild.get(interaction.guild.id).members;
            for (const u of users) {
                try {
                    let displayName = client.users.cache.get(u.userId).displayName;
                    embed.addFields({
                        name: displayName,
                        value: u.month + "/" + u.day + "/" + u.year,
                    });
                } catch (error) {
                    console.log(u.userId);
                    embed.addFields({
                        name: "Unknown User",
                        value: u.month + "/" + u.day + "/" + u.year,
                    });
                }
            }
            interaction.reply({embeds: [embed]});
        } catch (error) {
            console.log("Error viewing: " + error);
        }
    }
}