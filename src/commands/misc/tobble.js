const { EmbedBuilder } = require('discord.js');

const vls = [["The true sound of my blade can only be heard when they loathe re-incarnation.",
        "The only peace I seek... is death!",
        "They will call me villain... Come, let me earn their hatred, again and forever.",
        "Patience, Aatrox! Patience! Your freedom will come!",
        "You threaten me with words, I threaten you with extinction!",
        "Follow my example, leave none in your wake.",
        "Watch my brethren as their defenses crumble.",
        "My darkness was not born, it was forged by my prison."],
            ["It is not why I fight, but who I fight for.",
        "Onward! The spear points in only one direction.",
        "Death is the only thing that ever embraced me.",
        "Pressing forward is not the same as running from your mistakes.",
        "The power of these 'gods' is but an echo of our own.",
        "I do not set the pace, I race against it.",
        "The art of war is hearing your heart beating, knowing you are alive!",
        "If they kill me, at least I die a man."]];
const gifs = ["https://j.gifs.com/pQDXJX.gif","https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHgycnF6Y2tndjY1b3Uyc3VyOWQ0MzAweGFleHVsdjV0NzZnaDlieiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uKpnrlNWnpTofFEZoO/giphy.gif"];

module.exports = {
    name: "tobble",
    description: "Behold, immortality!",

    callback: (client, interaction) => {
        var champ = Math.round(Math.random());
        var randVL = Math.floor(Math.random() * vls[champ].length);
        const embed = new EmbedBuilder().setImage(gifs[champ]);
        interaction.reply({embeds: [embed], content: vls[champ][randVL]});
    }
}