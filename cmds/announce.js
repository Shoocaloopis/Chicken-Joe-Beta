const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    const needperms = new Discord.MessageEmbed()
    .setColor("FFA550")
    .setDescription("You do not have permission to use this command")
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(needperms)

    const messageannounce = message.content.replace('=announce', '')

    message.channel.send(`@everyone${messageannounce}`)
}
module.exports.help ={
    name: "announce",
    aliases: ["announcement"]
}