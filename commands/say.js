
exports.run = (client, message) => {
	        const args = message.content.slice("5").trim().split(/ +/g);
		const sayMessage = args.join(" ");
		message.delete().catch(O_o => { });
		message.channel.send(sayMessage);
}
module.exports.config = {
	name: 'say',
	aliases: [],
};