const Gacha = require('../models/gacha');
const rates = [0.6, 0.25, 0.1, 0.045, 0.005];

module.exports = async (interaction, guaranteed = 1) => {
    
    const unitQuery = {
        guildId: interaction.guild.id,
    };
    let prob = (guaranteed === 1) ? Math.random() : (1 - (Math.random() % rates[guaranteed - 1]));
    
    const banner = interaction.options.get("banner").value;
    switch(banner) {
        case 1:
            unitQuery.expansion = 1;
            break;
    }
    const units = await Gacha.find(unitQuery).sort('rarity type unit');
    let rarities = {};
    for (const unit of units) {
        rarities[unit.rarity] = rarities[unit.rarity] ? rarities[unit.rarity] + 1 : 1;
    }

    //Calculate Probability
    let rolledUnit;
    //console.log("Starting Probability: " + prob);
    for (const unit of units) {
        //Subtract probability from individual rates
        prob -= (rates[unit.rarity - 1] / rarities[unit.rarity]);
        //console.log("Skipped: " + unit.unit + "\nCurrent Probability: " + prob);

        //Break once probability reaches 0
        if (prob < 0) {
            rolledUnit = unit.unit;
            break;
        }
    }
    return rolledUnit;
}