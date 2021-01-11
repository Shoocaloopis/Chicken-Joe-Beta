const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    await message.delete()
    const needmessage =new Discord.MessageEmbed()
    .setColor("FFA550")
    .setDescription("Provide a message for me to say")
    if(!message.content.replace('=say', '')) return message.channel.send(needmessage)

    const messagee = message.content.replace('=say', '')

    message.channel.send(messagee)
}
module.exports.help ={
    name: "say",
    aliases: ["say"]
}