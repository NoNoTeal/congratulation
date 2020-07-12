const Discord = require(`discord.js`);
const botconfig = require(`../../botconfig.json`);

module.exports = {
    name: "weeb",
    group: "fun",
    description: 'call someone a weeb',
    command: true,
    guildOnly: true,
    cooldown: 5,
async run(message) {
if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to call someone a weeb.`)
else

var args = message.content.split(' ').slice(1);
let user = message.mentions.members.first() || message.guild.members.get(args[0])

if(!user) return message.channel.send(`You need to call someone a ~~qt~~ weeb, please \`ping\` someone or use their \`ID\`!`)
else

var nou = new Discord.RichEmbed()
    .setTitle(`New Weeb 🕸️`)
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
    .addField(`Weeb Tag`, message.author)
    .addField(`ID`, message.author.id)
    .addField(`Highest Role`,message.member.highestRole)
    .setColor(`#fcd303`)
    .setTimestamp()

if(user.id == message.client.user.id) return message.channel.send(nou)
else

message.delete()
var embed = new Discord.RichEmbed()
    .setTitle(`New Weeb 🕸️`)
    .setAuthor(`${user.user.tag}`, user.user.avatarURL)
    .addField(`Weeb Tag`, user)
    .addField(`ID`, user.id)
    .addField(`Highest Role`,user.highestRole)
    .setColor(`#fcd303`)
    .setTimestamp()
    Math.random() > 0.8 ? embed.addField(`They did it!`, message.author) : ''

message.channel.send(embed)

}}