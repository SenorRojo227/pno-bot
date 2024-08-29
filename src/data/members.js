const stances = require('./stances');
const skills = require('./skills');

module.exports = {
    pnoGoon: {
        name: "PNO Goon",
        colors: ["White"],
        rarity: 1,
        gender: null,
        img: "https://cdn.discordapp.com/attachments/324586503856717836/1276890778882281493/image.png?ex=66cf2135&is=66cdcfb5&hm=666d2fa9f14e48743f26b5405b18fe311db731b7b38afd542b5b6d00d9965733&",
        stats: {
            health: 8,
            strength: 8,
            fortitude: 8,
            passion: 8,
            logic: 8,
            agility: 8
        },
        stances: [],
        skills: [skills.punch],
    },
    discordBot: {
        name: "Discord Bot",
        colors: ["Gray"],
        rarity: 1,
        gender: null,
        stats: {
            health: 10,
            strength: 6,
            fortitude: 10,
            passion: 6,
            logic: 10,
            agility: 6
        },
        stances: [],
        skills: [],
    },
    leagueGoon: {
        name: "League Goon",
        colors: ["Black"],
        rarity: 2,
        gender: null,
        stats: {
            health: 5,
            strength: 12,
            fortitude: 5,
            passion: 10,
            logic: 7,
            agility: 9
        },
        stances: [],
        skills: [],
    },
    pokemonGoon: {
        name: "Pokemon Goon",
        colors: ["Green"],
        rarity: 2,
        gender: null,
        stats: {
            health: 8,
            strength: 6,
            fortitude: 7,
            passion: 12,
            logic: 11,
            agility: 7
        },
        stances: [],
        skills: [],
    },
    minecraftGoon: {
        name: "Minecraft Goon",
        colors: ["Blue"],
        rarity: 2,
        gender: null,
        stats: {
            health: 8,
            strength: 10,
            fortitude: 13,
            passion: 3,
            logic: 7,
            agility: 5
        },
        stances: [],
        skills: [],
    },
    mudae: {
        name: "Mudae",
        colors: ["Pink", "Gray"],
        rarity: 3,
        gender: null,
        stats: {
            health: 5,
            strength: 5,
            fortitude: 5,
            passion: 5,
            logic: 5,
            agility: 5
        },
        stances: [],
        skills: [],
    },
    pnoBot: {
        name: "PNO Bot",
        colors: ["Black", "Gray"],
        rarity: 3,
        gender: null,
        stats: {
            health: 5,
            strength: 5,
            fortitude: 5,
            passion: 5,
            logic: 5,
            agility: 5
        },
        stances: [],
        skills: [],
    },
    iceball: {
        name: "Iceball",
        colors: ["Blue"],
        rarity: 4,
        gender: "Male",
        stats: {
            health: 13,
            strength: 5,
            fortitude: 15,
            passion: 12,
            logic: 6,
            agility: 5
        },
        stances: [stances.artist],
        skills: [],
    },
    cat: {
        name: "Cat",
        colors: ["Pink"],
        rarity: 4,
        gender: "Female",
        stats: {
            health: 11,
            strength: 4,
            fortitude: 13,
            passion: 10,
            logic: 15,
            agility: 18
        },
        stances: [stances.kpop],
        skills: [],
    },
    gblaze: {
        name: "Gblaze",
        colors: ["Blue", "Green"],
        rarity: 4,
        gender: "Male",
        img: "https://cdn.discordapp.com/attachments/324586503856717836/1278531114956361811/Gblaze.png?ex=66d12463&is=66cfd2e3&hm=a9aed1df58f4382ceb8530a12b01af5ba5a4a479d46690896f9546b75cd22acf&",
        stats: {
            health: 9,
            strength: 9,
            fortitude: 6,
            passion: 11,
            logic: 15,
            agility: 11
        },
        stances: [stances.tornt],
        skills: [],
    },
    breifmanny: {
        name: "Breifmanny",
        colors: ["Red"],
        rarity: 4,
        gender: "Male",
        stats: {
            health: 6,
            strength: 12,
            fortitude: 5,
            passion: 14,
            logic: 5,
            agility: 12
        },
        stances: [],
        skills: [],
    },
    fincayran: {
        name: "Fincayran",
        colors: ["Green", "Black"],
        rarity: 4,
        gender: "Male",
        stats: {
            health: 10,
            strength: 11,
            fortitude: 7,
            passion: 4,
            logic: 16,
            agility: 14
        },
        stances: [],
        skills: [],
    },
    leo: {
        name: "Leo",
        colors: ["Black", "Red"],
        rarity: 4,
        gender: "Male",
        stats: {
            health: 6,
            strength: 15,
            fortitude: 6,
            passion: 6,
            logic: 9,
            agility: 17
        },
        stances: [],
        skills: [],
    },
    james: {
        name: "James",
        colors: ["Red", "Pink"],
        rarity: 4,
        gender: "Male",
        stats: {
            health: 14,
            strength: 6,
            fortitude: 12,
            passion: 14,
            logic: 7,
            agility: 10
        },
        stances: [],
        skills: [],
    },
    joy: {
        name: "Joy",
        colors: ["Pink", "Blue"],
        rarity: 4,
        gender: "Female",
        stats: {
            health: 8,
            strength: 6,
            fortitude: 6,
            passion: 13,
            logic: 10,
            agility: 14
        },
        stances: [],
        skills: [],
    },
    pyro: {
        name: "Pyro",
        colors: ["Red", "Green"],
        rarity: 4,
        gender: "Male",
        stats: {
            health: 16,
            strength: 13,
            fortitude: 12,
            passion: 6,
            logic: 8,
            agility: 4
        },
        stances: [],
        skills: [],
    }
}