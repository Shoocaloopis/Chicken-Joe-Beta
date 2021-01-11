const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    const member = message.mentions.users.first()
    const embed = new Discord.MessageEmbed()
    .setColor("FFA550")
    .setAuthor("Whois", member.displayAvatarURL())
    .setThumbnail(member.displayAvatarURL())
    .addField('User & Tag', `${member.tag}`, true)
    .addField('Account Created', `${member.createdAt}`, true)
    .addField('Id', `${member.id}`) 
    message.channel.send(embed)
}
module.exports.help ={
    name: "whois",
    aliases: ["whois"]
}