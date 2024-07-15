const { ApplicationCommandOptionType } = require('discord.js');
const calculateAge = require('../../utils/calculateAge');
const Birthday = require('../../models/birthday');

module.exports = {
    name: "viewbday",
    description: "Shows the desired user's birthday.",
    options: [
        {
            name: "user",
            description: "Enter the user whose birthday you wish to view.",
            type: ApplicationCommandOptionType.User,
            required: true,
        }
    ],
    
    callback: async (client, interaction) => {
        const query = {
            userId: interaction.options.getMember("user").id,
            guildId: interaction.guild.id,
        };
        try {
            const user = await Birthday.findOne(query);
            if (user) {
                let age = calculateAge(user.day, user.month, user.year);
                interaction.reply(interaction.options.getMember("user").displayName + "'s birthday is " + user.month + "/" + user.day + "/" + user.year + ". They are " + age + " years old!");
            } else {
                interaction.reply("This user does not have a birthday listed!");
            }
        } catch (error) {
            console.log("Error viewing: " + error);
        }
    }
}