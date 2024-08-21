const { ApplicationCommandOptionType } = require('discord.js');
const Birthday = require('../../models/birthday');
const scheduleBday = require('../../utils/scheduleBday');

module.exports = {
    name: "setbday",
    description: "Sets the users birthday.",
    options: [
        {
            name: "day",
            description: "Enter your birth day.",
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
        {
            name: "month",
            description: "Enter your birth month.",
            type: ApplicationCommandOptionType.Number,
            choices: [
                {
                    name: "january",
                    value: 1,
                },
                {
                    name: "february",
                    value: 2,
                },
                {
                    name: "march",
                    value: 3,
                },
                {
                    name: "april",
                    value: 4,
                },
                {
                    name: "may",
                    value: 5,
                },
                {
                    name: "june",
                    value: 6,
                },
                {
                    name: "july",
                    value: 7,
                },
                {
                    name: "august",
                    value: 8,
                },
                {
                    name: "september",
                    value: 9,
                },
                {
                    name: "october",
                    value: 10,
                },
                {
                    name: "november",
                    value: 11,
                },
                {
                    name: "december",
                    value: 12,
                },
            ],
            required: true,
        },
        {
            name: "year",
            description: "Enter your birth year.",
            type: ApplicationCommandOptionType.Number,
            required: true,
        }
    ],
    
    callback: async (client, interaction) => {
        const query = {
            userId: interaction.user.id,
            guildId: interaction.guild.id,
        };

        try {
            const user = await Birthday.findOne(query);
            if (user) {
                user.day = interaction.options.get("day").value;
                user.month = interaction.options.get("month").value;
                user.year = interaction.options.get("year").value;
                scheduleBday(client, interaction.user, user);
                await user.save();
                interaction.reply("Your birthday has been updated successfully!");
            } else {
                const newUser = new Birthday({
                    userId: interaction.user.id,
                    guildId: interaction.guild.id,
                    day: interaction.options.get("day").value,
                    month: interaction.options.get("month").value,
                    year: interaction.options.get("year").value,
                });
                scheduleBday(client, interaction.user, newUser);
                await newUser.save();
                interaction.reply("Your birthday has been set successfully!");
            }
        } catch (error) {
            console.log("Error setting birthday: " + error);
            interaction.reply("There was an error while trying to set your birthday. Please try again later.");
        }
    }
}