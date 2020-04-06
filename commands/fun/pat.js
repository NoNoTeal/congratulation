
const botconfig = require(`../../botconfig.json`);
module.exports = {
    name: "pat",
    group: "fun",
    command: true,
    guildOnly: true,
cooldown: 10,
async run(message) {


if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to pat.`)
else

var args = message.content.split(' ').slice(1);
var user = message.mentions.members.first() || message.guild.members.get(args[0])

if(!user) return message.channel.send(`You pat the air.`)
else

if(user.id == message.client.user.id) return message.channel.send(`m`)
else

if(user.id == message.author.id) return message.channel.send(`You pat yourself.`)
else

message.channel.send(`\`${message.author.tag}\` proceeds to pat \`${user.user.tag}\`. 🖐️`)


}}