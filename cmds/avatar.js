const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    const member = message.mentions.users.first()
    const embed = new Discord.MessageEmbed()
    .setAuthor("Avatar", member.displayAvatarURL)
    .setColor("#FFA500")
    .setImage(member.displayAvatarURL())
    message.channel.send(embed)
}
module.exports.help ={
    name: "avatar",
    aliases: ["avatar"]
}