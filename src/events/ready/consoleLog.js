const { ActivityType } = require('discord.js');

module.exports = (client) => {
    console.log(client.user.tag + " is online!");
    client.user.setActivity({
        name: "your loved ones perish.",
        type: ActivityType.Watching
    });
};