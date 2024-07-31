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
            const index = 0;
            const isBday = false;
            const users = await Birthday.find(query).sort('month day');
            for (let i = 0; i < users.length; i++) {
                if (users[i].month > date.getMonth() + 1 || (users[i].month == date.getMonth() + 1 && users[i].day > date.getDate())) {
                    index = i;
                    break;
                } else if (users[i].month == date.getMonth() + 1 && users[i].day == date.getDate()) {
                    isBday = true;
                }
            }   
            const displayName = client.users.cache.get(users[index].userId).displayName;
            if (isBday) {
                const bdayName = client.users.cache.get(users[index].userId).displayName;
                interaction.reply("Today is " + bdayName + "'s birthday! The next birthday is " + displayName + "'s on "  + users[index].month + "/" + users[index].day + "/" + users[index].year + "!");
            } else {
                interaction.reply("The next birthday is " + displayName + "'s on "  + users[index].month + "/" + users[index].day + "/" + users[index].year + "!");
            }
            
        } catch (error) {
            console.log("Error viewing: " + error);
        }
    }
}