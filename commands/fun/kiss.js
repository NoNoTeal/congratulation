const Discord = require(`discord.js`);
const botconfig = require(`../../botconfig.json`);

module.exports = {
    name: "kiss",
    group: "fun",
    command: true,
    guildOnly: true,
cooldown: 5,
async run(message) {

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to kiss.`)
else

var args = message.content.split(' ').slice(1);
var user = message.mentions.members.first() || message.guild.members.get(args[0])

if(!user) return message.channel.send(`You need someone else to kiss, please \`ping\` someone or use their \`ID\`!`)
else

if(user.id == message.client.user.id) return message.channel.send(`I'm sorry, \`lips.js\` wasn't located.`)
else

if(user.id == message.author.id) return message.channel.send(`Look, I need to get this straight. You can't kiss yourself.`)
else

message.channel.send(`Hey <@${user.id}>, ${message.author.tag} just gave you a great big kiss! 😘`)

}}