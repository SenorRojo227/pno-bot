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
    king: {
        name: "King",
        member: "Breifmanny",
        colors: ["Red","Blue"],
        rarity: 5,
        skills: [],
        statIncreases: [
            {strength: 1, fortitude: 1},
            {strength: 1, fortitude: 2},
            {strength: 2, fortitude: 2}
        ]
    },
    bartender: {
        name: "Bartender",
        member: "Fincayran",
        colors: ["Green","Black"],
        rarity: 5,
        skills: [],
        statIncreases: [
            {logic: 2},
            {logic: 3},
            {logic: 4}
        ]
    },
    pengu: {
        name: "Pengu",
        member: "Leo",
        colors: ["Black","Blue"],
        rarity: 5,
        skills: [],
        statIncreases: [
            {logic: 2},
            {passion: -1, logic: 3, agility: 1},
            {passion: -2, logic: 4, agility: 2}
        ]
    },
    queen: {
        name: "Queen",
        member: "James",
        colors: ["Red","Pink"],
        rarity: 5,
        skills: [],
        statIncreases: [
            {passion: 1, logic: 1},
            {passion: 2, logic: 1},
            {passion: 3, logic: 1}
        ]
    },
    secondDinner: {
        name: "Second Dinner",
        member: "Joy",
        colors: ["Pink","Yellow"],
        rarity: 5,
        skills: [],
        statIncreases: [
            {fortitude: 1, passion: 1},
            {fortitude: 1, passion: 2},
            {fortitude: 2, passion: 2}
        ]
    },
    mordekaiser: {
        name: "Mordekaiser",
        member: "Pyro",
        colors: ["Red, Green"],
        rarity: 5,
        skills: [],
        statIncreases: [
            {strength: 1, fortitude: 1},
            {strength: 1, fortitude: 2},
            {strength: 2, fortitude: 2}
        ]
    }
}