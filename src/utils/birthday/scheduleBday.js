require('dotenv').config();
const { EmbedBuilder } = require('discord.js');
const { CronJob } = require('cron');

module.exports = async (client, user, bday) => {
    const bdayEmbed = new EmbedBuilder().setImage("https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTBscTI1dWxheGpidG9tenhieDc4d3Jycmlvc3VxZzhua2dmdDNzaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OFgs54RnIQcOWoI4pO/giphy.gif");

    if (bday.cronJob) {
        bday.cronJob.stop();
    }

    const job = new CronJob(
        '00 00 06 ' + bday.day + ' ' + bday.month + ' *', // cronTime
        //'00 * * * * *',
        () => {
            if (process.env.GUILD_ID != process.env.TEST_ID) {
                client.channels.cache.get("1173513429525471262").send({embeds: [bdayEmbed], content: "Happy Birthday " + user.toString() + "!"});
            } else {
                client.channels.cache.get("374896458035494925").send({embeds: [bdayEmbed], content: "Happy Birthday " + user.toString() + "!"});
            }
        }, // onTick
        null, // onComplete
        true, // start
    );

    bday.cronJob = job;
}