const members = require('./members');
const stances = require('./stances');
const items = require('./items');

module.exports = [
    {
        num: 1,
        name: "PNO's Origins",
        available: true,
        spotlightUnits: [],
        regularUnits: [
            members.pnoGoon,
            members.discordBot,
            items.stick,
            items.portableGrass,
            members.leagueGoon,
            members.pokemonGoon,
            members.minecraftGoon,
            members.mudae,
            members.pnoBot,
            members.iceball,
            members.cat,
            stances.artist,
            stances.kpop
        ]
    },
    {
        num: 2,
        name: "World of Runeterra",
        available: false,
        spotlightUnits: [],
        regularUnits: [
            members.pnoGoon,
            members.discordBot
        ]
    }
]