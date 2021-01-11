const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    const needperms = new Discord.MessageEmbed()
    .setColor('#FFA550')
    .setDescription("You do not have permission to use this command")
    const args22 = message.content.split(' ').slice(1);
    const args222 = message.content.split(' ').slice(2);
    const target = message.mentions.members.first();
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(needperms);
    if (target) {
        if (args222) {
            target.kick();
            const kickembed = new Discord.MessageEmbed()
                .setColor("FFA550")
                .setDescription(`:white_check_mark: Successfully kicked ${target.tag}`)
                message.channel.send(kickembed)
        }
    }
}
module.exports.help = {
    name: "kick",
    aliases: ["kick"]
}