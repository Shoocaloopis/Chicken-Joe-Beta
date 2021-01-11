const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    const needperms = new Discord.MessageEmbed()
    .setColor("FFA550")
    .setDescription("You do not have permission to use this command")
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(needperms)


    const newname = message.content.replace('=renameguild', '')
    message.guild.setName(`${newname}`)
    const namechanged = new Discord.MessageEmbed()
    .setColor("FFA550")
    .setDescription(`:white_check_mark: Successfully changed guild name to ${newname}`)
    message.channel.send(namechanged)
}
module.exports.help ={
    name: "renameguild",
    aliases: ["renameguild"]
}