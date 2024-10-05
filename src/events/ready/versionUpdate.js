require('dotenv').config();
const pjson = require('../../../package.json');

const versions = {
    "2.3.0": [
        "- Added a command to paste and save team data"
    ],
    "2.2.6": [
        "- Added pages to /inventory",
        "- Fixed a bug that prevented users from viewing their inventories",
        "Known Issue: /setBday is disabled for now and will be reworked soon"
    ],
    "2.2.5": [
        "- Added more info to /viewUnit for stances and items",
        "- Adjusted /viewSkill layout slightly",
        "- Allowed /viewSkill to recognize lower case names",
        "- Allowed data to transfer between servers",
        "Known Issue: /setBday is disabled for now and will be reworked soon"
    ],
    "2.2.4": [
        "- Allowed /viewUnit to recognize lower case names",
        "- Fixed a bug that prevented units from appearing with the /viewUnit command"
    ],
    "2.2.3": [
        "- Added skills to /viewUnit command"
    ],
    "2.2.2": [
        "- Fixed a bug that prevented certain rolls from saving"
    ],
    "2.2.1": [
        "- Reset Inventories",
        "- Added more information to the /viewUnit command",
        "- Changed Minecraft Goon to Anime Goon",
        "- Fixed a bug that prevented /roll from working as intended"
    ],
    "2.2.0": [
        "- Begun preparing bot for v3.0.0",
        "- Added the /viewUnit command to see more information about a unit"
    ],
    "2.1.2": [
        "- Added a pity system for the gacha",
        "- Automatically send birthday messages in #announcements"
    ],
    "2.1.1": [
        "- Sorted member's inventories automatically",
        "- Added the written out dates to birthday replies",
        "- Prevented PNO Bot from posting repeated version updates"
    ],
    "2.1.0": [
        "- Added a help command",
        "- Added a command to manually give money",
        "- Added Pantheon quotes to the /tobble command",
        "- Created a channel in which the bot posts version updates automatically",
        "- Fixed a bug that prevented certain users from accessing their inventory",
        "- Fixed a bug that showed an inaccurate quantity of units in a member's inventory",
        "- Added replies for all errors"
    ],
    "2.0.2": [
        "- Added the /removeBday command",
        "- Fixed an error with the /nextBday command when no birthdays are listed"
    ],
    "2.0.1": [
        "- Fixed a bug that allowed users to gain infinite money",
        "- Increased daily income from $10 to $100"
    ],
    "2.0.0": [
        "- Added the /roll command which allows users to roll in a gacha system",
        "- Added the /daily command to gain $10 each day",
        "- Added the /inventory command to view rolled units and balance"
    ],
    "1.1.0": [
        "- Added the /nextBday command to view the next upcoming birthday",
        "- Added the /viewAllBdays command to view a list of all birthdays listed in the server"
    ],
    "1.0.2": [
        "- Implemented a birthday message with /viewBday on a user's birthday"
    ],
    "1.0.1": [
        "- Added new Aatrox voicelines with the /tobble command"
    ],
    "1.0.0": [
        "- Created the PNO Bot with birthday functionality",
        "- Added the /setBday command to set your birthday",
        "- Added the /viewBday command to view a user's birthday",
        "- Added the /tobble command to view a random Aatrox quote",
        "- Added custom interactions when pinged"
    ]

};

module.exports = (client) => {
    //Version Update
    let vMsg = "**[V" + pjson.version + "]**\n";
    for (const v of versions[pjson.version]) {
        vMsg += v + "\n";
    }

    //Find Channel
    let channels;
    if (process.env.IS_LOCAL == "TRUE") {
        channels = [
            client.channels.cache.get("1272739949447479316")
        ];
    } else {
        channels = [
            client.channels.cache.get("1272730506248716352"),
            client.channels.cache.get("1280335112248103006")
        ];
    }

    //Post
    for (const channel of channels) {
        channel.messages.fetch({limit: 1}).then(messages => {
            let lastMessage = messages.first();
            if (!lastMessage.content.includes(pjson.version)) {
                channel.send(vMsg);
            }
        });
    }
}