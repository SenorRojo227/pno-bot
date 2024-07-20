const Birthday = require('../../models/birthday');

module.exports = {
    name: "nextbday",
    description: "Shows the next upcoming birthday.",
    
    callback: async (client, interaction) => {
        const query = {
            userId: interaction.options.getMember("user").id,
            guildId: interaction.guild.id,
        };
        try {
            const user = await Birthday.findOne(query);
            interaction.reply("The next birthday is " + user.userId + "'s on "  + user.month + "/" + user.day + "/" + user.year + "!");
            
        } catch (error) {
            console.log("Error viewing: " + error);
        }
    }
}