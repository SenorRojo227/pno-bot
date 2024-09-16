const {
    ApplicationCommandOptionType,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
    EmbedBuilder,
    ActionRowBuilder,
    ComponentType
} = require('discord.js');
const Inventory = require('../../models/inventory');
const getUnits = require('../../utils/gacha/getUnits');

module.exports = {
    name: "setteam",
    description: "Assigns a team for you to battle with.",

    callback: async (client, interaction) => {
        /*
        const query = {
            userId: interaction.user.id,
        };
        try {
            const invs = await Inventory.find(query);
            for (const inv of invs) {
                let members = [];
                const units = getUnits();
                for (const i of inv.units) {
                    for (const u of units) {
                        if (i.name == u.name && u.type == "Member") {
                            members.push({
                                label: u.name,
                                description: u.rarity + " Star Member",
                                value: u.name
                            });
                        }
                    }
                }
                const memberSelectMenu = new StringSelectMenuBuilder()
                    .setCustomId(interaction.id)
                    .setPlaceholder("Select your 1st member...")
                    .setMinValues(0)
                    .setMaxValues(1)
                    .addOptions(members.map((member) =>
                        new StringSelectMenuOptionBuilder()
                            .setLabel(member.label)
                            .setDescription(member.description)
                            .setValue(member.value)
                        )
                    );
                    
                const actionRow = new ActionRowBuilder()
                    .addComponents(memberSelectMenu);
                
                const embed = new EmbedBuilder()
                    .setTitle("Team " + interaction.options.get("team").value);
                
                interaction.reply({embeds: [embed], components: [actionRow], ephemeral: true})
            }
            if (invs.length == 0) {
                interaction.reply("You don't have an inventory set up yet! Use /daily in a server to start gaining money!");
            }
        } catch(error) {
            console.log("Error setting team: " + error);
            interaction.reply("There was an error while trying to set your team. Please try again later.");
        }
        */
    }
}