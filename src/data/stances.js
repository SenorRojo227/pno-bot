const skills = require('./skills');

module.exports = {
    artist: {
        name: "Artist",
        member: "Iceball",
        colors: ["Blue"],
        rarity: 5,
        skills: [
            skills.creative,
            skills.paint,
            skills.sentimentalStrike
        ],
        statIncreases: [
            {fortitude: 1, passion: 5},
            {fortitude: 1, passion: 6, logic: 1},
            {fortitude: 2, passion: 7, logic: 1}
        ]
    },
    kpop: {
        name: "Kpop",
        member: "Cat",
        colors: ["Black","Pink"],
        rarity: 5,
        skills: [
            skills.performer,
            skills.killerVocals,
            skills.antifragile
        ],
        statIncreases: [
            {fortitude: 3, passion: 2, agility: 1},
            {fortitude: 4, passion: 2, agility: 2},
            {fortitude: 5, passion: 3, agility: 2}
        ]
    },
    tornt: {
        name: "Tornadus-Therian",
        member: "Gblaze",
        colors: ["Green"],
        rarity: 5,
        skills: [
            skills.regenerator,
            skills.acrobatics,
            skills.bleakwindStorm
        ],
        statIncreases: [
            {strength: 1, fortitude: 1, passion: 1, logic: 1, agility: 2},
            {strength: 1, fortitude: 2, passion: 1, logic: 1, agility: 3},
            {strength: 1, fortitude: 3, passion: 1, logic: 1, agility: 4}
        ]
    },
    king: {
        name: "King",
        member: "Breifmanny",
        colors: ["Red","Blue"],
        rarity: 5,
        skills: [
            skills.kingsAura,
            skills.ironFist,
            skills.rallyingSpeech
        ],
        statIncreases: [
            {strength: 2, fortitude: 1, passion: 1, logic: 1, agility: 1},
            {strength: 3, fortitude: 1, passion: 1, logic: 1, agility: 2},
            {strength: 3, fortitude: 2, passion: 1, logic: 2, agility: 2}
        ]
    },
    bartender: {
        name: "Bartender",
        member: "Fincayran",
        colors: ["Green","Black"],
        rarity: 5,
        skills: [
            skills.onTheHouse,
            skills.bloodyMary,
            skills.specialtyCocktail
        ],
        statIncreases: [
            {strength: 1, fortitude: 1, logic: 3, agility: 1},
            {strength: 1, fortitude: 1, logic: 4, agility: 2},
            {strength: 2, fortitude: 2, logic: 4, agility: 2}
        ]
    },
    pengu: {
        name: "Pengu",
        member: "Leo",
        colors: ["Black","Blue"],
        rarity: 5,
        skills: [
            skills.tactician,
            skills.reroll,
            skills.synergize
        ],
        statIncreases: [
            {logic: 5, agility: 1},
            {logic: 6, agility: 2},
            {logic: 7, agility: 3}
        ]
    },
    queen: {
        name: "Queen",
        member: "James",
        colors: ["Red","Pink"],
        rarity: 5,
        skills: [
            skills.queensAura,
            skills.seduction,
            skills.gambit
        ],
        statIncreases: [
            {strength: 1, fortitude: 1, passion: 2, logic: 1, agility: 1},
            {strength: 1, fortitude: 1, passion: 3, logic: 1, agility: 2},
            {strength: 1, fortitude: 2, passion: 3, logic: 2, agility: 2}
        ]
    },
    secondDinner: {
        name: "Second Dinner",
        member: "Joy",
        colors: ["Pink","Yellow"],
        rarity: 5,
        skills: [
            skills.hungry,
            skills.orderUp,
            skills.chomp
        ],
        statIncreases: [
            {strength: 2, fortitude: 3, passion: 1},
            {strength: 2, fortitude: 5, passion: 1},
            {strength: 2, fortitude: 7, passion: 1}
        ]
    },
    mordekaiser: {
        name: "Mordekaiser",
        member: "Pyro",
        colors: ["Red, Green"],
        rarity: 5,
        skills: [
            skills.indestructable,
            skills.obliterate,
            skills.realmOfDeath
        ],
        statIncreases: [
            {strength: 2, fortitude: 3, logic: 1},
            {strength: 3, fortitude: 4, logic: 1},
            {strength: 4, fortitude: 4, logic: 2}
        ]
    }
}