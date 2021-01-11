const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {

    await message.reply("I have sent you a direct message")
    await message.react("✅")

    const embed = new Discord.MessageEmbed()
    .setColor("FFA550")
    .setAuthor("Command Help")
    .setTitle("How to use the commands")
    .addField("help", "=help", true)
    .addField("commands", '=commands', true)
    .addField("Command information", '=cmd-info', true)
    .addField("8ball", "=8ball <question-here>", true)
    .addField("announce", "=announce <announcement-here>", true)
    .addField("avatar", "=avatar <mention-user-here>", true)
    .addField("ban", "=ban <mention-user>", true)
    .addField("kick", "=kick <mention-user>", true)
    .addField("botav", "=botav", true)
    .addField("botstats", "=botstats", true)
    .addField("channelinfo", "=channelinfo", true)
    .addField("enablemodlogs", "=enablemodlogs", true)
    .addField("invite", "=invite", true)
    .addField("logginginfo", "=logginginfo", true)
    .addField("membercount", "=membercount")
    .addField("ping", "=ping", true)
    .addField("slowmode", "=slowmode <slowmode-time>", true)
    .addField("removeslowmode", "=removeslowmode", true)
    .addField("renamechannel", "=renamechannel <new-channel-name>", true)
    .addField("renameguild", "=renameguild <new-guild-name>", true)
    .addField("say", "=say <custom-message>", true)
    .addField("serverinfo", "=serverinfo", true)
    .addField("serverstats", "=serverstats", true)
    .addField("setnick", "=setnick <new-nickname>", true)
    .addField("whois", "=whois <mention-user>", true)
    .setTimestamp()
    .setThumbnail(bot.user.displayAvatarURL())
    message.member.send(embed)
}
module.exports.help ={
    name: "cmdinfo",
    aliases: ["commandinfo"]
}