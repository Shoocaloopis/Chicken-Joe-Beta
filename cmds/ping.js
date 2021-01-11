const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#FFA550")
    .setAuthor("Bot Latency ")
    .setDescription(`${bot.ws.ping}`)
    message.channel.send(embed)
}
module.exports.help ={
    name: "ping",
    aliases: ["ping"]
}