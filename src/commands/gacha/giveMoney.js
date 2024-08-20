const { ApplicationCommandOptionType } = require('discord.js');
const Inventory = require('../../models/inventory');

module.exports = {
    name: "givemoney",
    description: "Gives money to a designated user.",
    devOnly: true,
    options: [
        {
            name: "user",
            description: "Enter the user's name.",
            type: ApplicationCommandOptionType.User,
            required: true,
        },
        {
            name: "amount",
            description: "Enter the amount of money to give.",
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
    ],
    
    callback: async (client, interaction) => {
        const query = {
            userId: interaction.options.getMember("user").id,
            guildId: interaction.guild.id,
        };

        try {
            const user = await Inventory.findOne(query);
            if (user) {
                user.balance += interaction.options.get("amount").value;
                await user.save();
                interaction.reply(interaction.options.getMember("user").displayName + " has been given $" + interaction.options.get("amount").value + "!");
            } else {
                interaction.reply(interaction.options.getMember("user").displayName + " does not have an inventory set up!");
            }
        } catch (error) {
            console.log("Error giving money: " + error);
            interaction.reply("There was an error while trying to give money to this user. Please try again later.");
        }
    }
}