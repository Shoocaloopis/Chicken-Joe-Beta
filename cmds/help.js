const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    await message.react('✅')
    await message.reply("I have sent you a direct message")
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Bot Help`, message.author.displayAvatarURL())
    .setThumbnail(bot.user.displayAvatarURL())
    .setColor("FFA550")
    .setTitle("Bot Invite")
    .setURL("https://discord.com/oauth2/authorize?client_id=797279332241375242&permissions=8&scope=bot")
    .addField("Prefix", "=", true)
    .addField("See all commnds command", "=commands", true)
    .addField("Bot Owner", "physx#6466", true)
    .addField("Testing Server", "https://discord.gg/Zur8tEQNPg", true)
    .setFooter("Surfs up dude!")

    message.member.send(embed)
}
module.exports.help ={
    name: "help",
    aliases: ["help"]
}