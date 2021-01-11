const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    const nickname = message.content.replace('=setnick', '')
    const needperms = new Discord.MessageEmbed()
    .setColor("#FFA550")
    .setDescription("You do not have permission to use this command")
    if(!message.member.hasPermission("CHANGE_NICKNAME")) return message.channel.send(needperms)

    const args1 = message.content.slice(0).split(/ +/)


    
    if(message.member.setNickname(nickname)){
    const nickchanged = new Discord.MessageEmbed()
    .setColor("FFA550")
    .setDescription(":white_check_mark: Successfully changed your nickname")
    message.channel.send(nickchanged)
    }
    
}
module.exports.help ={
    name: "setnick",
    aliases: ["setnick"]
}