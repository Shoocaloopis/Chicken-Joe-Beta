const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    const needperms = new Discord.MessageEmbed()
    .setColor("FFA550")
    .setDescription(":x: You do not have permission to use this commnad")
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(needperms)

    const alrslowmode = new Discord.MessageEmbed()
    .setColor("FFA550")
    .setDescription(":x: This channel already has slowmode removed")
    if(!message.channel.setRateLimitPerUser("0")) return message.channel.send(alrslowmode)

    message.channel.setRateLimitPerUser("0")
    const removed = new Discord.MessageEmbed()
    .setColor("FFA550")
    .setDescription(":white_check_mark: Slowmode has been removed")
    message.channel.send(removed)
}
module.exports.help ={
    name: "removeslowmode",
    aliases: ["removeslowmode"]
}