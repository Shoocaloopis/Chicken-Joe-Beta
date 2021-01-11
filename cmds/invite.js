const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#FFA500")
    .setTitle("Invite")
    .setURL("https://discord.com/oauth2/authorize?client_id=797279332241375242&permissions=8&scope=bot")
    .setAuthor("Invite link", message.author.displayAvatarURL())
    .setThumbnail(message.author.displayAvatarURL())
    message.channel.send(embed)
}
module.exports.help ={
    name: "invite",
    aliases: ["invite"]
}