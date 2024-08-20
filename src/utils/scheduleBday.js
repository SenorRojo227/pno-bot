require('dotenv').config();
const { EmbedBuilder } = require('discord.js');
const { MongoClient } = require('mongoDB');
const { MongoCron } = require('mongodb-cron');

module.exports = async (user, month, day) => {
    const bdayEmbed = new EmbedBuilder().setImage("https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTBscTI1dWxheGpidG9tenhieDc4d3Jycmlvc3VxZzhua2dmdDNzaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OFgs54RnIQcOWoI4pO/giphy.gif");
    /*MongoClient.connect(process.env.MONGODB_URI, async (err, client) => {
        if (err) throw err;
      
        const bdayCollection = client.db("test").collection("birthdays");
      
        const cron = new MongoCron({
            bdayCollection,
            onDocument: async () => {
                console.log("Happy Birthday " + user.displayName + "!");
                if (process.env.GUILD_ID != process.env.TEST_ID) {
                    client.channels.cache.get("1173513429525471262").send({embeds: [bdayEmbed], content: "Happy Birthday " + user.toString() + "!"});
                } else {
                    client.channels.cache.get("374896458035494925").send({embeds: [bdayEmbed], content: "Happy Birthday " + user.toString() + "!"});
                }
            },
            onError: async (err) => console.log(err),
        });
    
        cron.start();
    
        const job = await bdayCollection.insert({
            //interval: '00 37 21 ' + day + ' ' + month + ' *',
            interval: '00 * * * * *',
        });
    });
    */
    const mongo = await MongoClient.connect(process.env.MONGODB_URI);
    const bdayCollection = mongo.db("test").collection("birthdays");
    console.log();
    const cron = new MongoCron({
        bdayCollection,
        onDocument: async () => {
            console.log("Happy Birthday " + user.displayName + "!");
            if (process.env.GUILD_ID != process.env.TEST_ID) {
                client.channels.cache.get("1173513429525471262").send({embeds: [bdayEmbed], content: "Happy Birthday " + user.toString() + "!"});
            } else {
                client.channels.cache.get("374896458035494925").send({embeds: [bdayEmbed], content: "Happy Birthday " + user.toString() + "!"});
            }
        },
        onError: async (err) => console.log(err),
    });

    cron.start();

    const job = await bdayCollection.insert({
        //interval: '00 37 21 ' + day + ' ' + month + ' *',
        interval: '00 * * * * *',
    });
}