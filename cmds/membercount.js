const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#FFA550")
    .setAuthor("Member Count")
    .setDescription(`${message.guild.memberCount}`)
    message.channel.send(embed)
}
module.exports.help ={
    name: "membercount",
    aliases: ["membercount"]
}