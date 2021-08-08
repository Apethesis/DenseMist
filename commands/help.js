const Discord = require('discord.js');
exports.run = (client, message, args) => {
	const exampleEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Command List')
	.setDescription('Command List for DenseMist')
	.addFields(
		{ name: 'Fun Commands', value: 'e.meme\ne.furrymeme\ne.furryirl\ne.kill [arg]'},
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Admin Commands', value: 'e.kick [arg]\ne.ban [arg]\ne.say [arg]\ne.nuke', inline: true },
		{ name: 'Misc Commands', value: 'e.ping\ne.kill [arg]\ne.eval\ne.help\ne.urban [arg]', inline: true },
	)
	.addField('Bot Owner Commands', 'e.restart', true)
	.setTimestamp()
	.setFooter(message.author.id, message.author.defaultAvatarURL)

        message.channel.send(exampleEmbed); 

}
module.exports.config = {
	name: "help",
	aliases: ["cmds"]
};
