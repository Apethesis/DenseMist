const Discord = require('discord.js');

exports.run = (client, message, args) => {
	const dead = args.join(" ");
	const commander = message.author.username;
	message.channel.send(` [ @ : Killed ${dead} ] `);
   
}
module.exports.config = {
	name: 'kill',
	aliases: [],
};