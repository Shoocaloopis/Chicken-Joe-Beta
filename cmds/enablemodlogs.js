const Discord = require('discord.js')
const bot = new Discord.Client()

module.exports.run = async (bot, message, args) => {
    const needperms = new Discord.MessageEmbed()
        .setColor('#FFA550')
        .setDescription("You do not have permission to use this command")
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(needperms)

    const modlogchannel = message.guild.channels.cache.find(channel => channel.name === 'mod-logs')

    const needmodlogs = new Discord.MessageEmbed()
        .setColor("FFA550")
        .setAuthor("First you need to make a channel named: mod-logs")
    if (!modlogchannel) return message.channel.send(needmodlogs)

    bot.on('messageDelete', async (message) => {

        const embed = new Discord.MessageEmbed()
            .setColor("FFA550")
            .setAuthor(`Message deleted by ${message.author.tag}`)
            .setDescription(`Message that was deleted: ${message}`)
            .setThumbnail(message.author.displayAvatarURL())
            .setTimestamp()
        modlogchannel.send(embed)
        console.log("A message has been deleted, the bot has sent a snipe message")
    })
    const embed2 = new Discord.MessageEmbed()
        .setColor("FFA550")
        .setDescription(":white_check_mark: Moderation logging is now on, moderation actions will be logged in #mod-logs")
    message.channel.send(embed2)

    bot.on('channelCreate', channel => {
        
        const channelmade = new Discord.MessageEmbed()
        .setAuthor("Channel Created")
        .addField("Channel Name", `${channel.name}`, true)
        .addField("Channel Id", `${channel.id}`, true)
        .addField("Channel Topic", `${channel.topic}`, true)
        .addField("Channel Category", `${channel.parent}`, true)
        .addField("Channel Type", `${channel.type}`, true)
        .setTimestamp()
        modlogchannel.send(channelmade)
    })

    bot.on('channelDelete', channel => {
        const channeldeleted = new Discord.MessageEmbed()
        .setAuthor("Channel Deleted")
        .addField("Channel Name", `${channel.name}`, true)
        .addField("Channel Id", `${channel.id}`, true)
        .addField("Channel Topic", `${channel.topic}`, true)
        .addField("Channel Category", `${channel.parent}`, true)
        .addField("Channel Type", `${channel.type}`, true)
        .setTimestamp()
        modlogchannel.send(channeldeleted)
    })

    bot.on('guildBanAdd', ban => {
        const userbanned = new Discord.MessageEmbed()
        .setColor("FFA550")
        .setAuthor("A User Was Banned")
        .setDescription("Check audit log to see who was banned")
        modlogchannel.send(userbanned)
    })

    bot.on('guildUpdate', guild =>{
        const guildupdate = new Discord.MessageEmbed()
        .setColor("FFA550")
        .setAuthor("Guild Name Updated")
        .addField("New Name", `${message.guild.name}`, true)
        .setThumbnail(message.guild.iconURL())
        .setTimestamp()
        modlogchannel.send(guildupdate)
    })

    bot.on('roleCreate', role => {
        const rolemade = new Discord.MessageEmbed()
        .setColor("FFA550")
        .setAuthor("Role Created")
        .addField("Role Name", `${role.name}`, true)
        .addField("Role Id", `${role.id}`, true)
        .addField("Role Position", `${role.position}`, true)
        .addField("Role Created", `${role.createdAt}`, true)
        .addField("Role Hex Color", `${role.hexColor}`, true)
        .setTimestamp()
        modlogchannel.send(rolemade)
    })

    bot.on('roleDelete', role => {
        const roledelete = new Discord.MessageEmbed()
        .setColor("FFA550")
        .setAuthor("Role Deleted")
        .addField("Role Name", `${role.name}`, true)
        .addField("Role Id", `${role.id}`, true)
        .addField("Role Position", `${role.position}`, true)
        .addField("Role Created", `${role.createdAt}`, true)
        .addField("Role Hex Color", `${role.hexColor}`, true)
        .setTimestamp()
        modlogchannel.send(roledelete)
    })

}
module.exports.help = {
    name: "enablemodlogs",
    aliases: ["enablelogs"]
}