module.exports = (numBars) => {
    let bars = "``";
    for (let i = 0; i < numBars; i++) {
        bars += "|";
    }
    bars += "``";
    return bars;
}