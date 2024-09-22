const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const Inventory = require('../../models/inventory');
const Banners = require('../../data/banners');
const getBannerNames = require('../../utils/gacha/getBannerNames');
const getRandomUnit = require('../../utils/gacha/getRandomUnit');
const pityThreshold = 60;

module.exports = {
    name: "roll",
    description: "Roll for units.",
    options: [
        {
            name: "banner",
            description: "Choose the banner you would like to roll on.",
            type: ApplicationCommandOptionType.Number,
            choices: getBannerNames(),
            required: true,
        },
        {
            name: "amount",
            description: "Choose how many times you would like to roll.",
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
        };

        try {
            const inv = await Inventory.findOne(invQuery);
            if (inv) {
                if (inv.balance >= interaction.options.get("amount").value * 10) {
                    inv.balance -= interaction.options.get("amount").value * 10;
                    const embed = new EmbedBuilder()
                    .setTitle("Rolls x" + interaction.options.get("amount").value);
                    
                    let guaranteed = true;
                    let gRarity = 1;
                    for (let i = 1; i <= interaction.options.get("amount").value; i++) {
                        inv.rolls += 1;
                        if (inv.rolls >= pityThreshold) {
                            gRarity = 5;
                            guaranteed = false;
                            inv.rolls = 0;
                        } else {
                            gRarity = (i === 10 && guaranteed) ? 4 : 1;
                        }

                        const rolledUnit = getRandomUnit(gRarity, Banners[interaction.options.get("banner").value - 1]);

                        if (rolledUnit.rarity >= 4) {
                            guaranteed = false;
                        }
                        embed.addFields({
                            name: "Unit #" + i,
                            value: rolledUnit.name + " (" + rolledUnit.rarity + "*)",
                        });
                        let hasObtained = false;
                        for (const u of inv.units) {
                            if (u.name == rolledUnit.name) {
                                u.quantity++;
                                hasObtained = true;
                                break;
                            }
                        }
                        if (!hasObtained) {
                            inv.units.push({name: rolledUnit.name, quantity: 1});
                        }
                    }
                    inv.markModified("units");
                    inv.markModified("units.quantity");
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
            interaction.reply("There was an error while trying to roll for units. Please try again later.");
        }
    }
}