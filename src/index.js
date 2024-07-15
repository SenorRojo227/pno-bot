require('dotenv').config()

const { Client,
    GatewayIntentBits,
} = require('discord.js');

const mongoose = require('mongoose');
const eventHandler = require('./handlers/eventHandler');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ],
});

(async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to Database.");

        eventHandler(client);

        client.login(process.env.DISCORD_TOKEN);
    } catch (error) {
        console.log(error);
    }
})();