const { EmbedBuilder } = require('discord.js');
const Inventory = require('../../models/inventory');
const Gacha = require('../../models/gacha');

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
                for (const u of inv.units) {
                    const unitQuery = {
                        guildId: interaction.guild.id,
                        unit: u.name,
                    }
                    const unit = await Gacha.findOne(unitQuery);
                    embed.addFields({
                        name: u.name + " x" + u.quantity,
                        value: unit.rarity + "* " + unit.type,
                    });
                }
                interaction.reply({embeds: [embed]});
            } else {
                interaction.reply("Your inventory is not set up yet! Use /daily to start gaining money!");
            }
        } catch (error) {
            console.log("Error viewing inventory: " + error);
        }
    }
}