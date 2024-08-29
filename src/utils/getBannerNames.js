const banners = require("../data/banners");

module.exports = () => {
    let output = [];
    for (const b of banners) {
        if (b.available) {
            output.push({
                name: b.name,
                value: b.num,
            });
        }
    }
    return output;
}