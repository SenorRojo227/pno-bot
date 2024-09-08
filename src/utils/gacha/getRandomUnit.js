const rates = [
    0,  //Spotlight
    0.6,    //1*
    0.25,   //2*
    0.1,    //3*
    0.049,  //4*
    0.001   //5*
];

module.exports = (guaranteed = 1, banner) => {

    //Get Random Probability
    let prob = Math.random();
    if (guaranteed >= 4) {
        prob = 1 - (prob % rates[guaranteed] + (guaranteed === 5 ? rates[0] : 0));
    }
    
    //Number of Units per Rarity
    let numUnits = [banner.spotlightUnits.length];
    for (const unit of banner.regularUnits) {
        numUnits[unit.rarity] = numUnits[unit.rarity] ? numUnits[unit.rarity] + 1 : 1;
    }
    //Calculate Spotlight Probabilities
    //DEBUG: console.log("Starting Probability: " + prob);
    for (const unit of banner.spotlightUnits) {
        prob -= (rates[0] / numUnits[0]);

        if (prob < 0) {
            //DEBUG: console.log("Chosen: " + unit.name);
            return unit;
        }
        //DEBUG: console.log("Skipped: " + unit.name + "\nCurrent Probability: " + prob);
    }

    //Calculate Regular Probabilities
    for (const unit of banner.regularUnits) {
        prob -= (rates[unit.rarity] / numUnits[unit.rarity]);

        if (prob < 0) {
            //DEBUG: console.log("Chosen: " + unit.name);
            return unit;
        }
        //DEBUG: console.log("Skipped: " + unit.name + "\nCurrent Probability: " + prob);
    }
}