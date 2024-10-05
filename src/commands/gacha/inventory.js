const {
    EmbedBuilder,
    ButtonBuilder,
    ActionRowBuilder,
    ButtonStyle,
    ComponentType } = require('discord.js');
const Inventory = require('../../models/inventory');
const getUnits = require('../../utils/gacha/getUnits');

module.exports = {
    name: "inventory",
    description: "View your inventory.",
    
    callback: async (client, interaction) => {
        const query = {
            userId: interaction.user.id,
        };

        try {
            await interaction.deferReply();
            const inv = await Inventory.findOne(query);
            if (inv) {
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

                let invPages = [];
                let page = 0;
                for (let i = 0; i < sortedInv.length; i++) {
                    if (i%10 == 0) {
                        invPages.push([]);
                    }
                    invPages[Math.floor(i/10)][i%10] = sortedInv[i];
                }

                const embed = new EmbedBuilder()
                .setTitle("Inventory")
                .setAuthor({name: interaction.user.displayName, iconURL: interaction.user.displayAvatarURL()})
                .setDescription("Balance: $" + inv.balance);
                for (const u of invPages[page]) {
                    embed.addFields({
                        name: u.name + " x" + u.quantity,
                        value: u.rarity + "* "  + u.type,
                    });
                }
                const prevButton = new ButtonBuilder()
                    .setCustomId("Prev")
                    .setLabel("Prev")
                    .setEmoji("⬅️")
                    .setStyle(ButtonStyle.Primary);
                const pageButton = new ButtonBuilder()
                    .setCustomId("PgNum")
                    .setLabel("Page " + (page+1) + "/" + invPages.length)
                    .setStyle(ButtonStyle.Secondary)
                    .setDisabled(true);
                const nextButton = new ButtonBuilder()
                    .setCustomId("Next")   
                    .setLabel("Next")
                    .setEmoji("➡️")
                    .setStyle(ButtonStyle.Primary);

                const row = new ActionRowBuilder().addComponents([prevButton, pageButton, nextButton]);
                const reply = await interaction.editReply({
                    embeds: [embed],
                    components: [row]
                });
                const activeTime = 30 * 1000;
                const collector = await reply.createMessageComponentCollector({
                    componentType: ComponentType.Button,
                    activeTime
                });
                collector.on('collect', async i => {
                    await i.deferUpdate();
                    if (i.customId === "Prev") {
                        if (page > 0) page--;
                        pageButton.setLabel("Page " + (page+1) + "/" + invPages.length);
                    }
                    if (i.customId === "Next") {
                        if (page < invPages.length - 1) page++;
                        pageButton.setLabel("Page " + (page+1) + "/" + invPages.length);
                    }
                    if (page === 0) {
                        prevButton.setDisabled(true);
                    } else {
                        prevButton.setDisabled(false);
                    }
                    if (page === invPages.length - 1) {
                        nextButton.setDisabled(true);
                    } else {
                        nextButton.setDisabled(false);
                    }

                    const embed = new EmbedBuilder()
                    .setTitle("Inventory")
                    .setAuthor({name: interaction.user.displayName, iconURL: interaction.user.displayAvatarURL()})
                    .setDescription("Balance: $" + inv.balance);
                    for (const u of invPages[page]) {
                        embed.addFields({
                            name: u.name + " x" + u.quantity,
                            value: u.rarity + "* "  + u.type,
                        });
                    }
                    await reply.edit({
                        embeds: [embed],
                        components: [row]
                    })
                    collector.resetTimer();
                });
                collector.on('end', async () => {
                    await reply.edit({
                        embeds: [embed],
                        components: []})
                });
            } else {
                interaction.reply("Your inventory is not set up yet! Use /daily to start gaining money!");
            }
        } catch (error) {
            console.log("Error viewing inventory.");
            console.error(error);
            interaction.reply("There was an error while trying to view your inventory. Please try again later.");
        }
    }
}