const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    const embed2 = new Discord.MessageEmbed()
        .setColor("#FFA550")
        .setDescription("You need to ask a question")
    if(!message.content.replace('=8ball', '')) return message.channel.send(embed2)

    const responses = [
        "Maybe",
        "I don't know",
        "Ask again later",
        'Yes',
        "Definately",
        "Definately not",
        "Hmm, ask again"
    ]
    const response = responses[Math.floor(Math.random() * responses.length)]
    const embed = new Discord.MessageEmbed()
        .setColor("#FFA550")
        .setDescription(response)
    message.channel.send(embed)
}
module.exports.help = {
    name: "8ball",
    aliases: ["eightball"]
}