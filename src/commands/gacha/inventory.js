const { EmbedBuilder } = require('discord.js');
const Inventory = require('../../models/inventory');
const getUnits = require('../../utils/gacha/getUnits');

module.exports = {
    name: "inventory",
    description: "View your inventory.",
    
    callback: async (client, interaction) => {
        const query = {
            userId: interaction.user.id,
            guildId: interaction.guild.id,
        };

        try {
            const inv = await Inventory.findOne(query);
            if (inv) {
                const embed = new EmbedBuilder()
                .setTitle("Inventory")
                .setAuthor({name: interaction.user.displayName, iconURL: interaction.user.iconURL})
                .setDescription("Balance: $" + inv.balance);
                let sortedInv = [];
                for (const i of inv.units) {
                    let units = getUnits();
                    let unit;
                    for (const u of units) {
                        if (i.name == u.name) {
                            unit = u;
                            break;
                        }
                    }
                    sortedInv.push({
                        name: i.name,
                        quantity: i.quantity,
                        rarity: unit.rarity,
                        type: unit.type
                    });
                }
                sortedInv.sort((a, b) => b.rarity - a.rarity);
                for (const u of sortedInv) {
                    embed.addFields({
                        name: u.name + " x" + u.quantity,
                        value: u.rarity + "* "  + u.type,
                    });
                }
                interaction.reply({embeds: [embed]});
            } else {
                interaction.reply("Your inventory is not set up yet! Use /daily to start gaining money!");
            }
        } catch (error) {
            console.log("Error viewing inventory: " + error);
            interaction.reply("There was an error while trying to view your inventory. Please try again later.");
        }
    }
}