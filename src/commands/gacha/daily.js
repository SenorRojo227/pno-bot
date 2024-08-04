const Inventory = require('../../models/inventory');
const dailyAmount = 10;

module.exports = {
    name: "daily",
    description: "Claim your daily $10.",
    
    callback: async (client, interaction) => {
        const query = {
            userId: interaction.user.id,
            guildId: interaction.guild.id,
        };

        try {
            const inv = await Inventory.findOne(query);
            if (inv) {
                const lastDailyDate = inv.lastDaily.toDateString();
                const currentDate = new Date().toDateString();

                if (lastDailyDate != currentDate) {
                    inv.balance += dailyAmount;
                    await inv.save();
                    interaction.reply("You have received $10!");
                } else {
                    interaction.reply("You have already collected your dailies today. Come back tomorrow!");
                }
            } else {
                const newInv = new Inventory({
                    ...query,
                    lastDaily: new Date(),
                });
                await newInv.save();
                interaction.reply("Your inventory has been set up! You have received $100!");
            }
        } catch (error) {
            console.log("Error getting dailies: " + error);
        }
    }
}