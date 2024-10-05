const colorChart = require('../../data/colorChart');

module.exports = (moveColor, defensiveColor1, defensiveColor2) = () => {
         let multiplier = 1;

         if (colorChart[moveColor] && colorChart[moveColor][defensiveColor1] !== undefined) {
            const effectiveness1 = colorChart[moveColor][defensiveColor1];
            if (effectiveness1 == 0) {
                return 0;
            }
            multiplier *= effectiveness1;
         }

    if (defensiveColor2 && colorChart[moveColor] && colorChart[moveColor][defensiveColor2] !== undefined) {
        const effectiveness2 = colorChart[moveColor][defensiveColor2];
        if (effectiveness2 == 0) {
            return 0;
        }
        multiplier *= effectiveness2;
    }

    return multiplier;
}