exports.run = (client, message, args) => {
if (message.member.hasPermission("BAN_MEMBERS")) {
    if (message.members.mentions.first()) {
        try {
            message.members.mentions.first().ban();
        } catch {
            message.reply("I do not have permissions to ban" + message.members.mentions.first());
        }
    } else {
        message.reply("You do not have permissions to ban" + message.members.mentions.first());
    }
}

}

module.exports.config = {
	name: 'ban',
	aliases: [],
};