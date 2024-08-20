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

            const bday = new Date(users[index].year, users[index].month - 1, users[index].day);
            const options = {
                month: 'long',
                day: 'numeric',
              };

            if (isBday) {
                const bdayName = await interaction.guild.members.cache.get(users[index - 1].userId)?.displayName;
                interaction.reply("Today is " + bdayName + "'s birthday! The next birthday is " + displayName + "'s on "  + bday.toLocaleDateString(undefined, options) + "!");
            } else {
                interaction.reply("The next birthday is " + displayName + "'s on "  + bday.toLocaleDateString(undefined, options) + "!");
            }
            
        } catch (error) {
            console.log("Error viewing: " + error);
            interaction.reply("There was an error while trying to view the next birthday. Please try again later.");
        }
    }
}
