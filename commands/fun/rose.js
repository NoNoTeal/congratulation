const Discord = require(`discord.js`);
const botconfig = require(`../../botconfig.json`);

module.exports = {
    name: "rose",
    group: "fun",
    command: true,
    description: 'give someone a rose.',
    guildOnly: true,
    cooldown: 5,
async run(message) {

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to give roses.`)
else

var args = message.content.split(' ').slice(1);
var user = message.mentions.members.first() || message.guild.members.get(args[0])

if(!user) return message.channel.send(`You need someone to give a rose to, please \`ping\` someone or use their \`ID\`!`)
else

if(user.id == message.client.user.id) return message.channel.send(`\`holdobject.js\` wasn't located.`)
else

if(user.id == message.author.id) return message.channel.send(`You can't give yourself a rose.`)
else
var roses = [
    `🌷`,`🌹`,`🌺`,`🌻`,`🌸`, `🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,
    `🌷`,`🌹`,`🌺`,`🌻`,`🌸`, `🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,
    `🌷`,`🌹`,`🌺`,`🌻`,`🌸`, `🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,`🌷`,`🌹`,`🌺`,`🌻`,`🌸`,
    `💎`
]

var rose = roses[Math.floor(Math.random() * roses.length)]

message.channel.send(`<@${user.id}>, \`${message.author.tag}\` has decided to give you a rose! ${rose}`)

}}