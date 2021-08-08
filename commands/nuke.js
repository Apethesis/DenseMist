exports.run = (client, message, args) => {
   if (!message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.send('missing permissions')
        }

        message.channel.clone().then(channel => {
            channel.setPosition(message.channel.position)
            channel.send('nuked')
        })
        message.channel.delete()
}
module.exports.config = {
	name: 'nuke',
	aliases: [],
};