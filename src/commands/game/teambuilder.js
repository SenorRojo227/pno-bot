const {
    ApplicationCommandOptionType,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
    EmbedBuilder,
    ActionRowBuilder,
    ComponentType
} = require('discord.js');
const Inventory = require('../../models/inventory');

module.exports = {
    name: "teambuilder",
    description: "Edit a team in the teambuilder menu.",
    options: [
        {
            name: "team",
            description: "Choose the team you wish to edit.",
            type: ApplicationCommandOptionType.Number,
            choices: [
                {
                    name: "Team 1",
                    value: 1,
                },
                {
                    name: "Team 2",
                    value: 2,
                },
                {
                    name: "Team 3",
                    value: 3,
                }
            ],
            required: true,
        },
    ],

    callback: async (client, interaction) => {
        const query = {
            userId: interaction.user.id,
            guildId: interaction.guild.id,
        };
        try {
            const inv = await Inventory.findOne(query);
            if (inv) {
                const test = [
                    {
                        label: "Dog",
                        description: "I am a dog.",
                        value: "dog"
                    }
                ]
                const memberSelectMenu = new StringSelectMenuBuilder()
                    .setCustomId(interaction.id)
                    .setPlaceholder("Select a member...")
                    .setMinValues(0)
                    .setMaxValues(1)
                    .addOptions(test.map((pet) =>
                        new StringSelectMenuOptionBuilder()
                            .setLabel(pet.label)
                            .setDescription(pet.description)
                            .setValue(pet.value)
                        )
                    );
                    
                const actionRow = new ActionRowBuilder()
                    .addComponents(memberSelectMenu);
                
                const embed = new EmbedBuilder()
                    .setTitle("Team 1");
                
                interaction.reply({embeds: [embed], components: [actionRow], ephemeral: true})
            } else {
                interaction.reply("Your inventory is not set up yet! Use /daily to start gaining money!");
            }
        } catch(error) {
            console.log("Error opening the teambuilder: " + error);
            interaction.reply("There was an error while trying to access the teambuilder. Please try again later.");
        }
    }
}