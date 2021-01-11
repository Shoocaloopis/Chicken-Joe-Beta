const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("FFA550")
    .setAuthor('Bot Avatar', bot.user.displayAvatarURL())
    .setImage(bot.user.displayAvatarURL())
    message.channel.send(embed)
}
module.exports.help ={
    name: "botav",
    aliases: ["botavatar"]
}