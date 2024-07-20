const { EmbedBuilder } = require('discord.js');

const AATROX_VLS = ["The true sound of my blade can only be heard when they loathe re-incarnation.",
    "The only peace I seek... is death!",
    "They will call me villain... Come, let me earn their hatred, again and forever.",
    "Patience, Aatrox! Patience! Your freedom will come!",
    "You threaten me with words, I threaten you with extinction!",
    "Follow my example, leave none in your wake.",
    "Watch my brethren as their defenses crumble."];

module.exports = {
    name: "tobble",
    description: "Behold, immortality!",

    callback: (client, interaction) => {
        var randVL = Math.floor(Math.random() * AATROX_VLS.length);
        const embed = new EmbedBuilder().setImage("https://j.gifs.com/pQDXJX.gif");
        interaction.reply({embeds: [embed], content: AATROX_VLS[randVL]});
    }
}