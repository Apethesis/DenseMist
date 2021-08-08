const usersMap = new Map();
const LIMIT = 7;
const DIFF = 5000;
const Discord = require('discord.js');
const client = new Discord.Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const { loadCommands } = require('./utils/commands');

client.login("ODczNzM5MzA4MDU2NTg4Mjk4.YQ8zJA.igJNARKFrGjtcbEQkibykvhnXNQ");

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

loadCommands(client);

client.on("ready", () => {
	client.user.setActivity("the waiting game", { type: "PLAYING" })
});   

client.on('message', message => {
    const messageArray = message.content.split(" "); // This regex splits on every whitespace
    const cmd = messageArray[0];
    const args = messageArray.slice(1);
    
    const prefix = "e.";
	
    // mind if this will be an easter egg?
    
    if (!message.content.startsWith(prefix)) return;
    
    const commandfile = client.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
    commandfile.run(client, message, args);
});
client.on('guildMemberAdd', (guildMember) => {
   guildMember.addRole(guildMember.guild.roles.find(role => role.name === "member"));
});
client.on('message', (message) => {
    if(message.content == 'sus') {
        message.channel.send('https://kingofsponges.github.io/images/sus.gif');
    }
});