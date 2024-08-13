require('dotenv').config()
const { ActivityType } = require('discord.js');
const pjson = require('../../../package.json');

const versions = {
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
    //Console Log
    console.log(client.user.tag + " is online!\n"
        + "Running version " + pjson.version + ".");

    //Version Update
    let vMsg = "**[V" + pjson.version + "]**\n";
    for (const v of versions[pjson.version]) {
        vMsg += v + "\n";
    }
    if (process.env.GUILD_ID != process.env.TEST_ID) {
        client.channels.cache.get("1272730506248716352").send(vMsg);
    }

    //Set Activity
    client.user.setActivity({
        name: "your loved ones perish.",
        type: ActivityType.Watching
    });
};