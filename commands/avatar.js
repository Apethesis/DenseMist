const { MessageEmbed } = require("discord.js")
exports.run = (client, message, args) => {
let embed = new Discord.MessageEmbed()
.setImage(message.author.avatarURL)
.setColor('#275BF0')
message.channel.send(embed)
}

module.exports.config = {
    name: 'avatar',
    aliases: [],
};