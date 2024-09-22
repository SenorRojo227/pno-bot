const { ApplicationCommandOptionType} = require('discord.js');
const Inventory = require('../../models/inventory');

module.exports = {
    name: "giveunit",
    description: "Gives a user a desired unit.",
    devOnly: true,
    options: [
        {
            name: "user",
            description: "Choose the user you would like to give a unit to.",
            type: ApplicationCommandOptionType.User,
            required: true
        },
        {
            name: "unit",
            description: "Choose the unit you would like to give.",
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: "quantity",
            description: "Choose the quantity you would like to give.",
            type: ApplicationCommandOptionType.Number,
            required: true
        },
    ],
    
    callback: async (client, interaction) => {
        const invQuery = {
            userId: interaction.options.getMember("user").id,
        };

        try {
            const inv = await Inventory.findOne(invQuery);
            if (inv) {
                let hasObtained = false;
                for (const u of inv.units) {
                    if (u.name == interaction.options.get("unit").value) {
                        u.quantity += interaction.options.get("quantity").value;
                        hasObtained = true;
                        break;
                    }
                }
                if (!hasObtained) {
                    inv.units.push({name: interaction.options.get("unit").value, quantity: interaction.options.get("quantity").value});
                }
                inv.markModified("units");
                inv.markModified("units.quantity");
                await inv.save();
                interaction.reply(interaction.options.get("quantity").value + "x " + interaction.options.get("unit").value + " has been given to " + interaction.options.getMember("user").displayName + ".");
            } else {
                interaction.reply("You do not have an inventory set up yet! Use /daily to start earning money!");
            }
        } catch (error) {
            console.log("Error giving unit: " + error);
            interaction.reply("There was an error while trying to give this unit. Please try again later.");
        }
    }
}