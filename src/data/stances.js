const skills = require('./skills');

module.exports = {
    artist: {
        name: "Artist",
        member: "Iceball",
        colors: ["Blue"],
        rarity: 5,
        skills: [],
        statIncreases: [
            {passion: 2},
            {passion: 3},
            {passion: 4}
        ]
    },
    kpop: {
        name: "Kpop",
        member: "Cat",
        colors: ["Black","Pink"],
        rarity: 5,
        skills: [],
        statIncreases: [
            {passion: 1, agility: 1},
            {passion: 2, agility: 1},
            {passion: 2, agility: 2}
        ]
    },
    tornt: {
        name: "Tornadus-Therian",
        member: "Gblaze",
        colors: ["Green"],
        rarity: 5,
        skills: [],
        statIncreases: [
            {agility: 2},
            {agility: 3},
            {agility: 4}
        ]
    },
}