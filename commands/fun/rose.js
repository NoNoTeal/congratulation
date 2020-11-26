const Discord = require(`discord.js`);
const Util = require("../../util/util");


module.exports = {
    name: "rose",
    group: "fun",
    command: true,
    description: 'give someone a rose.',
    guildOnly: true,
    cooldown: 5,
async run(message) {

var args = message.content.split(/\s+/).slice(1);
var user = await Util.userParsePlus(message, args, 'member');

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