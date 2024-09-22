const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const getUnits = require('../../utils/gacha/getUnits');
const getBars = require('../../utils/gacha/getBars');

module.exports = {
    name: "viewunit",
    description: "View a unit's information.",
    options: [
        {
            name: "unit",
            description: "Choose the unit you wish to view.",
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ],

    callback: (client, interaction) => {
    try {
            const units = getUnits();
            let unit;
            for (const u of units) {
                if (u.name.toLowerCase() == interaction.options.get("unit").value.toLowerCase()) {
                    unit = u;
                    break;
                }
            }
            if (unit == null) {
                interaction.reply("Invalid Unit. Please try again.");
                return;
            }

            const embed = new EmbedBuilder()
                .setTitle(unit.name)
                .setDescription(unit.rarity + "* " + unit.type)
                .setImage(unit.img);

            switch(unit.type) {
                case "Member":
                    embed.addFields({
                        name: "Colors",
                        value: unit.colors[0] + (unit.colors[1] ? " / " + unit.colors[1] : "")
                    },
                    {
                        name: "Stances",
                        value: (unit.stances[0] ? unit.stances[0].name : "N/A") + (unit.stances[1] ? " / " + unit.stances[1].name : "") + (unit.stances[2] ? " / " + unit.stances[2].name : "")
                    },
                    {
                        name: "Stats",
                        value: "**Health:** " + unit.stats.health + "\n" + 
                            "**Strength:** " + unit.stats.strength + "\n" + 
                            "**Fortitude:** " + unit.stats.fortitude + "\n" + 
                            "**Passion:** " + unit.stats.passion + "\n" + 
                            "**Logic:** " + unit.stats.logic + "\n" + 
                            "**Agility:** " + unit.stats.agility,
                        inline: true
                    },
                    {
                        name: "\u200b",
                        value: getBars(unit.stats.health) + "\n" + 
                            getBars(unit.stats.strength) + "\n" + 
                            getBars(unit.stats.fortitude) + "\n" + 
                            getBars(unit.stats.passion) + "\n" + 
                            getBars(unit.stats.logic) + "\n" + 
                            getBars(unit.stats.agility),
                        inline: true
                    },
                    {
                        name: "\u200b",
                        value: "\u200b",
                    },
                    {
                        name: "Skills",
                        value: unit.skills[0].name  + "\n" +
                            unit.skills[2].name  + "\n" +
                            unit.skills[4].name  + "\n" +
                            unit.skills[6].name  + "\n" +
                            unit.skills[8].name,
                        inline: true
                    },
                    {
                        name: "\u200b",
                        value: unit.skills[1].name  + "\n" +
                        unit.skills[3].name  + "\n" +
                        unit.skills[5].name  + "\n" +
                        unit.skills[7].name  + "\n" +
                        unit.skills[9].name,
                        inline: true
                    });
                    break;
                case "Item":
                    embed.addFields({
                        name: "Description",
                        value: unit.description
                    })
                    break;
                case "Stance":
                    embed.addFields({
                        name: "Member",
                        value: unit.member
                    },
                    {
                        name: "Colors",
                        value: unit.colors[0] + (unit.colors[1] ? " / " + unit.colors[1] : "")
                    },
                    {
                        name: "Stat Boosts",
                        value: (unit.statIncreases[0].health ? "**Health:** " + unit.statIncreases[0].health + "\n" : "") + 
                            (unit.statIncreases[0].strength ? "**Strength:** " + unit.statIncreases[0].strength + "\n" : "") + 
                            (unit.statIncreases[0].fortitude ? "**Fortitude:** " + unit.statIncreases[0].fortitude + "\n" : "") + 
                            (unit.statIncreases[0].passion ? "**Passion:** " + unit.statIncreases[0].passion + "\n" : "") + 
                            (unit.statIncreases[0].logic ? "**Logic:** " + unit.statIncreases[0].logic + "\n" : "") + 
                            (unit.statIncreases[0].agility ? "**Agility:** " + unit.statIncreases[0].agility + "\n" : ""),
                        inline: true
                    },
                    {
                        name: "Level 2",
                        value: (unit.statIncreases[1].health ? "**Health:** " + unit.statIncreases[1].health + "\n" : "") + 
                            (unit.statIncreases[1].strength ? "**Strength:** " + unit.statIncreases[1].strength + "\n" : "") + 
                            (unit.statIncreases[1].fortitude ? "**Fortitude:** " + unit.statIncreases[1].fortitude + "\n" : "") + 
                            (unit.statIncreases[1].passion ? "**Passion:** " + unit.statIncreases[1].passion + "\n" : "") + 
                            (unit.statIncreases[1].logic ? "**Logic:** " + unit.statIncreases[1].logic + "\n" : "") + 
                            (unit.statIncreases[1].agility ? "**Agility:** " + unit.statIncreases[1].agility + "\n" : ""),
                        inline: true
                    },
                    {
                        name: "Level 3",
                        value: (unit.statIncreases[2].health ? "**Health:** " + unit.statIncreases[2].health + "\n" : "") + 
                            (unit.statIncreases[2].strength ? "**Strength:** " + unit.statIncreases[2].strength + "\n" : "") + 
                            (unit.statIncreases[2].fortitude ? "**Fortitude:** " + unit.statIncreases[2].fortitude + "\n" : "") + 
                            (unit.statIncreases[2].passion ? "**Passion:** " + unit.statIncreases[2].passion + "\n" : "") + 
                            (unit.statIncreases[2].logic ? "**Logic:** " + unit.statIncreases[2].logic + "\n" : "") + 
                            (unit.statIncreases[2].agility ? "**Agility:** " + unit.statIncreases[2].agility + "\n" : ""),
                        inline: true
                    },
                    {
                        name: "Skills",
                        value: unit.skills[0].name  + "\n" +
                        unit.skills[1].name  + "\n" +
                        unit.skills[2].name  + "\n"
                    });
                    break;
            }
            interaction.reply({embeds: [embed]});
        } catch (error) {
            console.log("Error viewing unit: " + error);
            interaction.reply("There was an error while trying to view this unit. Please try again later.");
        }
    }
}