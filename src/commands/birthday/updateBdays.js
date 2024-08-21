const { ApplicationCommandOptionType } = require('discord.js');
const Birthday = require('../../models/birthday');
const scheduleBday = require('../../utils/scheduleBday');

module.exports = {
    name: "updatebdays",
    description: "Updates all users' birthdays.",
    deleted: true,
    
    callback: async (client, interaction) => {
        
    }
}