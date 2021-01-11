const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#FFA500")
    .setAuthor("Server Information")
    .setThumbnail(message.guild.iconURL())
    .addField('Server Name', `${message.guild.name}`, true)
    .addField('Server Owner', `${message.guild.owner.user.tag}`, true)
    .addField('Server Id', `${message.guild.id}`, true)
    .addField('Member Count', `${message.guild.memberCount}`, true)
    .addField('Channel Count', `${message.guild.channels.cache.size}`, true)
    .addField('Created', `${message.guild.createdAt}`, true)
    .addField('Region', `${message.guild.region}`, true) 

    message.channel.send(embed)
}
module.exports.help ={
    name: "serverinfo",
    aliases: ["serverinfo"]
}