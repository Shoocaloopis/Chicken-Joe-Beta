const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    const botstats = new Discord.MessageEmbed()
    .setColor("#FFA550")
    .setAuthor("Bot Stats")
    .addField("Prefix", "=", true)
    .addField("Owner of bot", "physx#6466", true)
    .addField("Bot Username", `${bot.user.username}`, true)
    .addField('Users', `${bot.users.cache.size}`, true)
    .addField('Servers', `${bot.guilds.cache.size}`, true)
    .addField(`Commands`, "25", true)

    message.channel.send(botstats)
}
module.exports.help ={
    name: "botstats",
    aliases: ["botstats"]
}