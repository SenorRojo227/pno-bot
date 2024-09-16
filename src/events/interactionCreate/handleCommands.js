require('dotenv').config()
const getLocalCommands = require('../../utils/misc/getLocalCommands');

module.exports = async (client, interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const localCommands = getLocalCommands();

    try {
        const commandObject = localCommands.find(
            (cmd) => cmd.name === interaction.commandName
        );

        if (!commandObject) return;

        //If local code, then run in local server only. Otherwise run anywhere
        if (interaction.guild != null && ((process.env.IS_LOCAL == "TRUE" && interaction.guild.id != process.env.TEST_ID) || (process.env.IS_LOCAL == "FALSE" && interaction.guild.id == process.env.TEST_ID)) ) return;

        if (commandObject.testOnly) {
            if(interaction.guild.id != process.env.TEST_ID) {
                interaction.reply({
                    content: "This command cannot be ran here.",
                    ephemeral: true,
                })
                return;
            }
        }

        if (commandObject.devOnly) {
            if(!process.env.DEVS.includes(interaction.member.id)) {
                interaction.reply({
                    content: "Only moderators are allowed to run this command.",
                    ephemeral: true,
                })
                return;
            }
        }

        await commandObject.callback(client, interaction);

    } catch (error) {
        console.log(error);
    }
};