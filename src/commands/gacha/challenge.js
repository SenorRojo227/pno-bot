const { ApplicationCommandOptionType, ChatInputCommandInteraction, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

const choices = [
    { name: 'Attack' },
    { name: 'Run' }
];

module.exports = {
    name: 'challenge',
    description: 'Challenge another user to a battle.',
    dm_permission: false,
    options: [
        {
            name: 'user',
            description: "The user you want to play with.",
            type: ApplicationCommandOptionType.User,
            required: true,
        }
    ],
    callback: async (client, interaction) => {
        try {
            const targetUser = interaction.options.getMember('user');

            if (interaction.user.id === targetUser.id) {
                interaction.reply({
                    content: 'You can not challenge yourself.',
                    ephemeral: true,
                });
                return;
            }

            if (targetUser.bot) {
                interaction.reply({
                    content: 'You can not challenge a bot.',
                    ephemeral: true,
                })
                return;
            }

            const embed = new EmbedBuilder()
                .setTitle('Test Challenge')
                .setDescription(`It is currently ${targetUser}'s turn.`)
                .setColor('Yellow')
                .setTimestamp(new Date());
            
            const buttons = choices.map((choice) => {
                return new ButtonBuilder()
                    .setCustomId(choice.name)
                    .setLabel(choice.name)
                    .setStyle(ButtonStyle.Primary)
            });

            const row = new ActionRowBuilder().addComponents(buttons);

            const reply = await interaction.reply({
                content: `${targetUser}, you have been challenged by ${interaction.user}.`,
                embeds: [embed],
                components: [row],
            });
        } catch (error) {
            console.log('Error with challenge');
            console.log(error);
        }
    }
}