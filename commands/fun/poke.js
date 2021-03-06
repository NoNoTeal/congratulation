const Util = require("../../util/util");

module.exports = {
    name: "poke",
    group: "fun",
    command: true,
    guildOnly: true,
    description: 'Poke someone',
    cooldown: 5,
    async run(message) {
var args = message.content.split(/\s+/).slice(1);
let user = await Util.userParsePlus(message, args, 'member');

if(!user) return message.channel.send(`You need to poke someone, please \`ping\` someone or use their \`ID\`!`)
else

if(user.id == message.client.user.id) return message.channel.send(`<@${message.author.id}>👈${message.client.user}`)
else
message.channel.send(`<@${user.id}>👈${message.author.username}`)
    }
}