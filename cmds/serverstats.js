const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#FFA550")
    .setAuthor("Server Stats")
    .addField("Member Count", `${message.guild.memberCount}`, true)
    .addField("Role Count", `${message.guild.roles.cache.size}`, true)
    .addField("Channel Count", `${message.guild.channels.cache.size}`)

    message.channel.send(embed)
}
module.exports.help ={
    name: "serverstats",
    aliases: ["serverstats"]
}