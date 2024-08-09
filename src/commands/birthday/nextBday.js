const Birthday = require('../../models/birthday');

module.exports = {
    name: "nextbday",
    description: "Shows the next upcoming birthday.",
    
    callback: async (client, interaction) => {
        const query = {
            guildId: interaction.guild.id,
        };
        try {
            const date = new Date();
            let index = 0;
            let isBday = false;
            const users = await Birthday.find(query).sort('month day');
            
            if (users.length === 0) {
                interaction.reply("There are no birthdays set in this server.");
                return;
            }
            
            for (let i = 0; i < users.length; i++) {
                if (users[i].month > date.getMonth() + 1 || (users[i].month == date.getMonth() + 1 && users[i].day > date.getDate())) {
                    index = i;
                    break;
                } else if (users[i].month == date.getMonth() + 1 && users[i].day == date.getDate()) {
                    isBday = true;
                }
            }
            
            const displayName = await interaction.guild.members.cache.get(users[index].userId)?.displayName;
            if (!displayName) {
                interaction.reply("There are no upcoming birthdays set in this server.");
                return;
            }

            if (isBday) {
                const bdayName = await interaction.guild.members.cache.get(users[index - 1].userId)?.displayName;
                interaction.reply("Today is " + bdayName + "'s birthday! The next birthday is " + displayName + "'s on "  + users[index].month + "/" + users[index].day + "!");
            } else {
                interaction.reply("The next birthday is " + displayName + "'s on "  + users[index].month + "/" + users[index].day + "/" + users[index].year + "!");
            }
            
        } catch (error) {
            console.log("Error viewing: " + error);
            interaction.reply("An error occurred while trying to retrieve the next birthday.");
        }
    }
}
