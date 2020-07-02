const Discord = require(`discord.js`);
const botconfig = require(`../../botconfig.json`);

module.exports = {
    name: "qt",
    group: "fun",
    command: true,
    guildOnly: true,
    cooldown: 5,
async run(message) {

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to call someone a qt.`)
else

var args = message.content.split(' ').slice(1);
let user = message.mentions.members.first() || message.guild.members.get(args[0])

if(!user) return message.channel.send(`You need to call someone a qt, please \`ping\` someone or use their \`ID\`!`)
else

var nou = new Discord.RichEmbed()
    .setTitle(`New QT Incoming ✨`)
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
    .addField(`QT Tag`, message.author)
    .addField(`ID`, message.author.id)
    .setColor(`#ff00bb`)
    .setTimestamp()

if(user.id == message.client.user.id) return message.channel.send(nou)
else

message.delete()
var embed = new Discord.RichEmbed()
    .setTitle(`New QT Incoming ✨`)
    .setAuthor(`${user.user.tag}`, user.user.avatarURL)
    .addField(`QT Tag`, user)
    .addField(`ID`, user.id)
    .setColor(`#ff00bb`)
    .setTimestamp()
    Math.random() > 0.8 ? embed.addField(`They did it!`, message.author) : ''

message.channel.send(embed)

}}
