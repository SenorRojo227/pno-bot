const { ApplicationCommandOptionType } = require('discord.js');
const calculateAge = require('../../utils/birthday/calculateAge');
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

                //Check if Birthday
                const date = new Date();
                const bday = new Date(user.year, user.month - 1, user.day);
                const options = {
                    month: 'long',
                    day: 'numeric',
                  };
                if (user.day == date.getDate() && user.month == (date.getMonth() + 1)) {
                    interaction.reply(interaction.options.getMember("user").displayName + "'s birthday is today! They are " + age + " years old! Happy Birthday!");
                } else {
                    interaction.reply(interaction.options.getMember("user").displayName + "'s birthday is " + bday.toLocaleDateString(undefined, options) + ". They are " + age + " years old!");
                }
            } else {
                interaction.reply(interaction.options.getMember("user").displayName + " does not have a birthday listed!");
            }
        } catch (error) {
            console.log("Error viewing: " + error);
            interaction.reply("There was an error while trying to view this birthday. Please try again later.");
        }
    }
}