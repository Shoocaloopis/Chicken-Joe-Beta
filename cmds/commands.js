const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    const e = await message.channel.send("Ok, i have dmed you all of the commands!")

    e.react('✅')
    const embed = new Discord.MessageEmbed()
        .setColor("#FFA000")
        .setAuthor("Commands")
        .setTitle("The commands start with =")
        .addField("=cmdinfo", "How to use all the commands", true)
        .addField("=help", "Help information for the bot", true)
        .addField('=8ball', 'Random answer to a question', true)
        .addField("=avatar", "Shows the mentioned user's avatar", true)
        .addField("=invite", "Sends the bot's invite link", true)
        .addField("=membercount", "Shows the server's member count", true)
        .addField("=serverinfo", "Shows data about the server", true)
        .addField("=whois", "Shows the mentioned user's information", true)
        .addField("=ping", "Shows the bot's current ms/ping", true)
        .addField("=commands", "Shows all the bot commands", true)
        .addField("=setnick", "changes your nickname for you", true)
        .addField("=botstats", "Show's the bots stats/information", true)
        .addField("=announce", "Sends a custom announcement in the current channel", true)
        .addField("=channelinfo", "Sends information about current channel", true)
        .addField("=serverstats", "Sends some statics about the current server", true)
        .addField('=botavatar', "Sends the bot's avatar", true)
        .addField("=slowmode", "Sets a custom slowmode", true)
        .addField("=renamechannel", "Renames channel to a custom name", true)
        .addField("=ban", "Bans a member mentioned", true)
        .addField("=kick", "kicks a member mentioned", true)
        .addField("=say", "Says a custom message", true)
        .addField("=enablemodlogs", "Enables mod logs in mod-logs channel", true)
        .addField("=logginginfo", "See what the bot can log when mod logs are enabled", true)
        .addField("=botav", "Sends the bot's avatar", true)
        .addField("=removeslowmode", "Removes channel slowmode", true)
        .addField("=remameguild", "Changes server/guild name", true)

    message.member.send(embed)


}
module.exports.help = {
    name: "commands",
    aliases: ["commands"]
}