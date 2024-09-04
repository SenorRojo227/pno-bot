const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "help",
    description: "Provides useful tips for using PNO Bot",

    callback: async (client, interaction) => {
        
        const bdayEmbed = new EmbedBuilder()
            .setTitle("Birthday Tips")
            .setDescription("These commands allow users to manage and view their birthdays.")
            .addFields({
                name: "/setbday [Day] [Month] [Year]",
                value: "A command that creates or edits the user's birthday.",
            })
            .addFields({
                name: "/viewbday [User]",
                value: "A command that shows the birthday of a selected user.",
            })
            .addFields({
                name: "/viewbdaylist",
                value: "A command that shows all of the birthdays in the server.",
            })
            .addFields({
                name: "/nextbday",
                value: "A command that shows the next user's birthday.",
            })
            .addFields({
                name: "/removebday",
                value: "A command that removes the user's birthday.",
            });
        const gachaEmbed = new EmbedBuilder()
            .setTitle("Gacha Tips")
            .setDescription("These commands allow users to roll for their favorite PNO Members.")
            .addFields({
                name: "/daily",
                value: "A command that initializes the users inventory and gives $100 each day.",
            })
            .addFields({
                name: "/roll [Banner] [Amount]",
                value: "The command used to roll for units.",
            })
            .addFields({
                name: "/inventory",
                value: "A command that shows the user's inventory and balance.",
            })
            .addFields({
                name: "/viewunit",
                value: "A command that shows additional information about a unit",
            });
        const gameEmbed = new EmbedBuilder()
            .setTitle("Gacha Tips")
            .setDescription("These commands allow users to roll for their favorite PNO Members.")
            .addFields({
                name: "/teambuilder",
                value: "A command that opens a hidden teambuilder.",
            });
        const miscEmbed = new EmbedBuilder()
            .setTitle("Miscellaneous Tips")
            .setDescription("These commands have varying usage.")
            .addFields({
                name: "/help",
                value: "A command that displays tips for using PNO Bot.",
            })
            .addFields({
                name: "/tobble",
                value: "A command that displays a random Aatrox or Pantheon quote.",
            });
        interaction.reply("A DM has been sent to you!");
        await interaction.user.send({embeds: [bdayEmbed, gachaEmbed, gameEmbed, miscEmbed]});
    }
}