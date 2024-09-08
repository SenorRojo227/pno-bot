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
            members.animeGoon,
            items.selfieStick,
            items.headset,
            members.mudae,
            members.pnoBot,
            items.impostersBlade,
            items.rabadonsDeathCap,
            items.banHammer,
            items.crown,
            items.diamondChestplate,
            items.leftovers,
            members.iceball,
            members.cat,
            members.gblaze,
            members.breifmanny,
            members.fincayran,
            members.leo,
            members.james,
            members.joy,
            members.pyro,
            stances.artist,
            stances.kpop,
            stances.tornt,
            stances.king,
            stances.bartender,
            stances.pengu,
            stances.queen,
            stances.mergeAddict,
            stances.mordekaiser
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