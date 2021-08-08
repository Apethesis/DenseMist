exports.run = (client, message, args) => {
    if(message.author.id !== "653195695133818898") return message.channel.send("Access denied");

console.log("--------------------------------------------------")
console.warn("❌ - Emergency shutdown system initated, overriding all bot actions, exit code 404.")
console.error("❌ - Bot shutdown success")
process.exit(404);
}
module.exports.config = {
    name: 'restart',
    aliases: [],
};