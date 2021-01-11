const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("FFA550")
    .setAuthor("Channel Information")
    .addField('Channel Name', `${message.channel.name}`, true)
    .addField("Type", `${message.channel.type}`, true)
    .addField("Id", `${message.channel.id}`, true)
    .addField("Created At", `${message.channel.createdAt}`, true)
    .addField("NSFW", `${message.channel.nsfw}`, true)
    .addField("Category", `${message.channel.parent}`, true)
    message.channel.send(embed) 
}
module.exports.help ={
    name: "channelinfo",
    aliases: ["channelinfo"]
}