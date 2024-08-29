const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const getUnits = require('../../utils/getUnits');
const getBars = require('../../utils/getBars');

module.exports = {
    name: "viewunit",
    description: "View a unit's information.",
    options: [
        {
            name: "unit",
            description: "Choose the unit you wish to view.",
            type: ApplicationCommandOptionType.String,
            choices: getUnits(true),
            required: true,
        },
    ],

    callback: (client, interaction) => {
    //try {
            let units = getUnits();
            let unit;
            for (const u of units) {
                if (u.name == interaction.options.get("unit").value) {
                    unit = u;
                    break;
                }
            }
            const embed = new EmbedBuilder()
                .setTitle(unit.name)
                //.setColor(unit.colors[0])
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
                        value: "**Health:** " + unit.stats.health  + "\n" + 
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
                    });
                    break;
                case "Item":
                    break;
                case "Stance":
                    break;
            }
            interaction.reply({embeds: [embed]});
        /*} catch (error) {
            console.log("Error viewing unit: " + error);
            interaction.reply("There was an error while trying to view this unit. Please try again later.");
        }*/
    }
}