const { ApplicationCommandOptionType } = require('discord.js');
const Inventory = require('../../models/inventory');
const getUnits = require('../../utils/gacha/getUnits');

module.exports = {
    name: "setteam",
    description: "Assigns a team for you to battle with.",
    devOnly: true,
    options: [
        {
            name: "team",
            description: "Submit your team data.",
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ],

    callback: async (client, interaction) => {
        interaction.reply(interaction.options.get("team").value);
    }
}