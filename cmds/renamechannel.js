const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    const needperms = new Discord.MessageEmbed()
    .setColor("FFA550")
    .setDescription("You do not have permission to use this command")

    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(needperms)

    const newname = message.content.replace('=renamechannel', '')

    message.channel.setName(newname)

    const channelrenamed = new Discord.MessageEmbed()
    .setColor("#FFA550")
    .setDescription(`:white_check_mark: Successfully renamed channel to ${newname}`)
    message.channel.send(channelrenamed)
}
module.exports.help ={
    name: "renamechannel",
    aliases: ["renamechannel"]
}