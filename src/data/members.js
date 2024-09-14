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
        skills: [
            skills.punch,
            skills.skullReact,
            skills.banter,
            skills.emojiConnoisseur,
            skills.capsLock,
            skills.spamPing,
            skills.hypeUp,
            skills.flame,
            skills.headbutt,
            skills.warmWelcome
        ]
    },
    discordBot: {
        name: "Discord Bot",
        colors: ["Gray"],
        rarity: 1,
        gender: null,
        img: "https://styles.redditmedia.com/t5_3b1wr/styles/communityIcon_qdbg6bz0bud71.png",
        stats: {
            health: 10,
            strength: 6,
            fortitude: 10,
            passion: 6,
            logic: 10,
            agility: 6
        },
        stances: [],
        skills: [
            skills.prune,
            skills.spamPing,
            skills.kick,
            skills.messageDelay,
            skills.botPerms,
            skills.slashTrap,
            skills.warn,
            skills.ghost,
            skills.logOff,
            skills.banFrenzy
        ]
    },
    leagueGoon: {
        name: "League Goon",
        colors: ["Red"],
        rarity: 2,
        gender: null,
        img: "https://i.pinimg.com/originals/fb/e5/72/fbe572e1faefa97388243a952acfbe93.jpg",
        stats: {
            health: 9,
            strength: 8,
            fortitude: 5,
            passion: 10,
            logic: 10,
            agility: 9
        },
        stances: [],
        skills: [
            skills.banter,
            skills.flame,
            skills.lockIn,
            skills.excercise,
            skills.squareUp,
            skills.gank,
            skills.bonk,
            skills.roam,
            skills.powerspike,
            skills.oneVsNineCarry
        ],
    },
    pokemonGoon: {
        name: "Pokemon Goon",
        colors: ["Green"],
        rarity: 2,
        gender: null,
        img: "https://pa1.aminoapps.com/6773/3cffca5c4d96c8d0e4593292e202a81c345ebae8_00.gif",
        stats: {
            health: 8,
            strength: 9,
            fortitude: 4,
            passion: 12,
            logic: 11,
            agility: 7
        },
        stances: [],
        skills: [],
    },
    animeGoon: {
        name: "Anime Goon",
        colors: ["Black"],
        rarity: 2,
        gender: null,
        img: "https://i.pinimg.com/736x/24/e1/1e/24e11e8df73186b41088e48f8342e994.jpg",
        stats: {
            health: 6,
            strength: 10,
            fortitude: 13,
            passion: 9,
            logic: 3,
            agility: 10
        },
        stances: [],
        skills: [],
    },
    mudae: {
        name: "Mudae",
        colors: ["Pink", "Gray"],
        rarity: 3,
        gender: null,
        img: "https://cdn.discordapp.com/avatars/432610292342587392/29cb28fbf65a3958105026ab03abd306.png?size=4096",
        stats: {
            health: 9,
            strength: 8,
            fortitude: 4,
            passion: 12,
            logic: 8,
            agility: 11
        },
        stances: [],
        skills: [],
    },
    pnoBot: {
        name: "PNO Bot",
        colors: ["White", "Gray"],
        rarity: 3,
        gender: null,
        img: "https://cdn.discordapp.com/attachments/324586503856717836/1262435408172679168/image.png?ex=66d5de18&is=66d48c98&hm=7e0a48520312f3384712451deabea45bdb119dc0085dc42503ee6a392566fbc6&",
        stats: {
            health: 8,
            strength: 6,
            fortitude: 13,
            passion: 6,
            logic: 13,
            agility: 6
        },
        stances: [],
        skills: [],
    },
    iceball: {
        name: "Iceball",
        colors: ["Blue"],
        rarity: 4,
        gender: "Male",
        img: "",
        stats: {
            health: 13,
            strength: 5,
            fortitude: 15,
            passion: 12,
            logic: 7,
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
        img: "https://upload.wikimedia.org/wikipedia/commons/6/62/240329_Kim_Chae-won_%281%29.jpg",
        stats: {
            health: 11,
            strength: 4,
            fortitude: 13,
            passion: 10,
            logic: 13,
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
        img: "https://ih1.redbubble.net/image.2831760158.5296/flat,750x1000,075,t.jpg",
        stats: {
            health: 6,
            strength: 12,
            fortitude: 5,
            passion: 14,
            logic: 5,
            agility: 15
        },
        stances: [stances.king],
        skills: [],
    },
    fincayran: {
        name: "Fincayran",
        colors: ["Green", "Black"],
        rarity: 4,
        gender: "Female",
        img: "",
        stats: {
            health: 10,
            strength: 11,
            fortitude: 7,
            passion: 4,
            logic: 16,
            agility: 14
        },
        stances: [stances.bartender],
        skills: [],
    },
    leo: {
        name: "Leo",
        colors: ["Black", "Red"],
        rarity: 4,
        gender: "Male",
        img: "https://cdn.discordapp.com/attachments/343934085833555970/1274374970297810964/pikachu-sad.gif?ex=66d5cc2d&is=66d47aad&hm=3cd3462148a1fcc4cab7bb8de6b7f812b91a77d1c04a32fc783e6a74598120b2&",
        stats: {
            health: 6,
            strength: 15,
            fortitude: 6,
            passion: 6,
            logic: 9,
            agility: 16
        },
        stances: [stances.pengu],
        skills: [],
    },
    james: {
        name: "James",
        colors: ["Red", "Pink"],
        rarity: 4,
        gender: "Male",
        img: "https://cdn.discordapp.com/attachments/1262547918179799080/1276017043199496202/anime-lagtrain.gif.5bc8ba5337c4f1ded18536a2f9ce1d29.gif?ex=66d1397a&is=66cfe7fa&hm=0dcbaa2844f76c3dc4b68dd06d8e4f666cef378ae7654795497c5bb462713834&",
        stats: {
            health: 14,
            strength: 6,
            fortitude: 12,
            passion: 14,
            logic: 7,
            agility: 10
        },
        stances: [stances.queen],
        skills: [],
    },
    joy: {
        name: "Joy",
        colors: ["Pink", "Yellow"],
        rarity: 4,
        gender: "Female",
        img: "",
        stats: {
            health: 11,
            strength: 9,
            fortitude: 6,
            passion: 12,
            logic: 10,
            agility: 13
        },
        stances: [stances.secondDinner],
        skills: [],
    },
    pyro: {
        name: "Pyro",
        colors: ["Red", "Green"],
        rarity: 4,
        gender: "Male",
        img: "https://cdn.discordapp.com/attachments/1253541184463310848/1277530847037231165/nQXSAyfz_400x400.png?ex=66d6bb51&is=66d569d1&hm=2f05b9e14fa064258ce10a58218400ddcf3001c4f829604ec91c5524748d1739&",
        stats: {
            health: 16,
            strength: 17,
            fortitude: 12,
            passion: 6,
            logic: 8,
            agility: 4
        },
        stances: [stances.mordekaiser],
        skills: [],
    }
}