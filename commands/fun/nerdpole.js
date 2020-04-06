const Discord = require(`discord.js`);
const botconfig = require(`../../botconfig.json`);

module.exports = {
    name: "nerdpole",
    group: "fun",
    command: true,
    guildOnly: true,
cooldown: 10,
async run(message) {


if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to call someone a nerdpole.`)
else

var args = message.content.split(' ').slice(1);
let user = message.mentions.members.first() || message.guild.members.get(args[0])

if(!user) return message.channel.send(`You need to call someone a nerdpole, please \`ping\` someone or use their \`ID\`!`)
else

var nou = new Discord.RichEmbed()
    .setTitle(`Nerdpole Alert 🤓`)
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
    .addField(`User`, message.author)
    .setColor(`#00ffbb`)
    .setTimestamp()

if(user.id == message.client.user.id) return message.channel.send(nou)
else

message.delete()
var embed = new Discord.RichEmbed()
    .setTitle(`Nerdpole Alert 🤓`)
    .setAuthor(`${user.user.tag}`, user.user.avatarURL)
    .addField(`User`, user)
    .setColor(`#00ffbb`)
    .setTimestamp()

message.channel.send(embed)

}}