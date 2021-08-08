exports.run = (client, message, args) => {
    message.channel.send("pong!").catch(console.error);
}
module.exports.config = {
	name: 'ping',
	aliases: [],
};