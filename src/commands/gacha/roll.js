const { ApplicationCommandOptionType } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const getRandomUnit = require('../../utils/getRandomUnit');
const Inventory = require('../../models/inventory');
const Gacha = require('../../models/gacha');


module.exports = {
    name: "roll",
    description: "Roll for units.",
    options: [
        {
            name: "banner",
            description: "Choose the banner you would like to roll on.",
            type: ApplicationCommandOptionType.Number,
            choices: [
                {
                    name: "PNO Beginnings",
                    value: 1,
                },
            ],
            required: true,
        },
        {
            name: "amount",
            description: "Choose how many times you would like to roll",
            type: ApplicationCommandOptionType.Number,
            choices: [
                {
                    name: "1 Time",
                    value: 1,
                },
                {
                    name: "10 Times",
                    value: 10,
                },
            ],
            required: true,
        },
    ],
    
    callback: async (client, interaction) => {
        const invQuery = {
            userId: interaction.user.id,
            guildId: interaction.guild.id,
        };

        try {
            const inv = await Inventory.findOne(invQuery);
            if (inv) {
                if (inv.balance >= interaction.options.get("amount").value * 10) {
                    inv.balance -= interaction.options.get("amount").value * 10;
                    const embed = new EmbedBuilder()
                    .setTitle("Rolls x" + interaction.options.get("amount").value);
                    
                    let guaranteed = true;
                    for (let i = 1; i <= interaction.options.get("amount").value; i++) {
                        let gRarity = (i === 10 && guaranteed) ? 4 : 1;
                        const rolledUnit = await getRandomUnit(interaction, gRarity);
                        console.log(rolledUnit);
                        const unitQuery = {
                            guildId: interaction.guild.id,
                            unit: rolledUnit,
                        }
                        const unit = await Gacha.findOne(unitQuery);
                        if (unit.rarity >= 4) {
                            guaranteed = false;
                        }
                        embed.addFields({
                            name: "Unit #" + i,
                            value: rolledUnit + " (" + unit.rarity + "*)",
                        });
                        let hasObtained = false;
                        for (const u of inv.units) {
                            if (u.name === rolledUnit) {
                                u.quantity++;
                                hasObtained = true;
                                break;
                            }
                        }
                        if (!hasObtained) {
                            inv.units.push({name: rolledUnit, quantity: 1});
                        }
                    }
                    await inv.save();
                    interaction.reply({embeds: [embed]});
                } else {
                    interaction.reply("Your balance of $" + inv.balance + " is insufficient!");
                }
            } else {
                interaction.reply("You do not have an inventory set up yet! Use /daily to start earning money!");
            }
        } catch (error) {
            console.log("Error rolling for unit: " + error);
        }
    }
}