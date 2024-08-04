const { ApplicationCommandOptionType } = require('discord.js');
const Gacha = require('../../models/gacha');

module.exports = {
    name: "setunit",
    description: "Assigns a unit to the gacha system.",
    devOnly: true,
    options: [
        {
            name: "unit",
            description: "Enter the unit's name.",
            type: ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: "type",
            description: "What type of unit are they?.",
            type: ApplicationCommandOptionType.String,
            choices: [
                {
                    name: "member",
                    value: "Member",
                },
                {
                    name: "item",
                    value: "Item",
                },
                {
                    name: "stance",
                    value: "Stance",
                },
            ],
            required: true,
        },
        {
            name: "rarity",
            description: "Enter the unit's rarity.",
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
        {
            name: "expansion",
            description: "Enter the unit's expansion.",
            type: ApplicationCommandOptionType.Number,
            required: true,
        }
    ],
    
    callback: async (client, interaction) => {
        const query = {
            unit: interaction.options.get("unit").value,
            guildId: interaction.guild.id,
        };

        try {
            const entry = await Gacha.findOne(query);
            if (entry) {
                entry.type = interaction.options.get("type").value;
                entry.rarity = interaction.options.get("rarity").value;
                entry.expansion = interaction.options.get("expansion").value;
                await entry.save();
                interaction.reply(interaction.options.get("type").value + " has been updated successfully!");
            } else {
                const newEntry = new Gacha({
                    guildId: interaction.guild.id,
                    unit: interaction.options.get("unit").value,
                    type: interaction.options.get("type").value,
                    rarity: interaction.options.get("rarity").value,
                    expansion: interaction.options.get("expansion").value,
                });
                await newEntry.save();
                interaction.reply(interaction.options.get("type").value + " has been set successfully!");
            }
        } catch (error) {
            console.log("Error setting unit: " + error);
        }
    }
}