const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("FFA550")
    .setAuthor("Logging Information")
    .setTitle("Do =enablemodlogs to enable this feature")
    .addField("Message Deletes", "Bot Automatically sends a message in mod-logs channel when a message is deleted", true)
    .addField("Channel Creates", "Bot Automatically sends a message in mod-logs channel when a channel is created", true)
    .addField("Channel Deletes", "Bot Automatically sends a message in mod-logs channel when a channel is deleted", true)
    .addField("Bans", "Bot Automatically sends a message in mod-logs channel when a user is gets banned", true)
    .addField("Server Updates", "Bot Automatically sends a message in mod-logs channel when the guild/server name is updated", true)
    .addField("Role Creates", "Bot Automatically sends a message in mod-logs channel when a role is created", true)
    .addField("Role Deletes", "Bot Automatically sends a message in mod-logs channel when a role is deleted", true) 
    .setTimestamp()
    message.channel.send(embed)
}
module.exports.help ={
    name: "logginginfo",
    aliases: ["logginginfo"]
}