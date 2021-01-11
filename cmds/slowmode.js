const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    const needperms = new Discord.MessageEmbed()
    .setColor("FFA550")
    .setDescription("You do not have permission to use this command")

    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(needperms)

    const slowmode = message.content.replace('=slowmode', '')

    message.channel.setRateLimitPerUser(slowmode)

    const embed = new Discord.MessageEmbed()
    .setColor("FFA550")
    .setDescription(`:white_check_mark: Slowmode was set to ${slowmode}`)
    message.channel.send(embed)
}
module.exports.help ={
    name: "slowmode",
    aliases: ["slowmode"]
}