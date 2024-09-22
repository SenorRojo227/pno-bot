const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const getSkills = require('../../data/skills');

module.exports = {
    name: "viewskill",
    description: "View information about a skill.",
    options: [
        {
            name: "skill",
            description: "Choose the skill you wish to view.",
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ],

    callback: (client, interaction) => {
        try {
            const skills = Object.values(getSkills);
            let skill;
            for (const s of skills) {
                if (s.name.toLowerCase() == interaction.options.get("skill").value.toLowerCase()) {
                    skill = s;
                    break;
                }
            }
            if (skill == null) {
                interaction.reply("Invalid Skill. Please try again.");
                return;
            }

            const embed = new EmbedBuilder()
                .setTitle(skill.name)
                .setDescription(skill.description)
                .addFields({
                    name: "Color",
                    value: skill.color,
                    inline: true
                },
                {
                    name: "Category",
                    value: skill.category,
                    inline: true
                });
            if (skill.power) {
                embed.addFields({
                    name: "Power",
                    value: "" + skill.power,
                    inline: true
                });
            }
            interaction.reply({embeds: [embed]});
        } catch (error) {
            console.log("Error viewing skill: " + error);
            interaction.reply("There was an error while trying to view this skill. Please try again later.");
        }
    }
}