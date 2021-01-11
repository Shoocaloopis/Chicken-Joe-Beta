const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {


    const helpban = new Discord.MessageEmbed()
        .setColor("FFA550")
        .setAuthor("Wrong Use")
        .addField("Correct Use", "=kick @member", true)

    if(args[0]) return message.channel.send(helpban)
    
    const needperms = new Discord.MessageEmbed()
    .setColor('#FFA550')
    .setDescription("You do not have permission to use this command")
    const args22 = message.content.split(' ').slice(1);
    const args222 = message.content.split(' ').slice(2);
    const target = message.mentions.members.first();
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(needperms);
    if (target) {
        if (args222) {
            target.ban();
            const banembed = new Discord.MessageEmbed()
                .setColor("FFA550")
                .setDescription(`:white_check_mark: Successfully banned ${target.tag}`)
                message.channel.send(banembed)
        }
    }
}
module.exports.help = {
    name: "ban",
    aliases: ["ban"]
}